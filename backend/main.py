from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated
from database import create_engine_instance, create_session_local
import models
from sqlalchemy.orm import Session


app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost",
]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=create_engine_instance())


def get_db():
    db = create_session_local()()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


@app.get("/", tags=["index"])
async def index():
    return {"message": "Hello Wolrd"}


@app.get("/{item_id}", tags=["Item"])
async def read_item(item_id: int, db: db_dependency):
    result = db.query(models.Inventories).filter(models.Inventories.item_id == item_id).all()
    
    if not result:
        raise HTTPException(status_code=404,
                            detail='Question Not Found'
                )
    
    new_result = []
    for entry in result:
        new_entry = {
            "item_id": entry.item_id,
            "quantity": entry.quantity,
            "date": None
        }
        if entry.date_received_into_inventory != "NULL":
            new_entry["date"] = entry.date_received_into_inventory
        else:
            new_entry["date"] = entry.date_shipped_from_inventory
        new_result.append(new_entry)

    return new_result