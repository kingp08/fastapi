from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

DATABASE_USER = "postgres"
DATABASE_PASSWORD = "admin"
DATABASE_HOST = "127.0.0.1"
DATABASE_PORT = "5432"
DATABASE_NAME = "inventory"


def get_database_url():
    return f"postgresql://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}:" \
           f"{DATABASE_PORT}/{DATABASE_NAME}"


def create_engine_instance():
    return create_engine(get_database_url())


engine = create_engine_instance()


def create_session_local():
    return sessionmaker(autocommit=False, autoflush=False, bind=engine)


SessionLocal = create_session_local()

Base = declarative_base()

