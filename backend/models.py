from sqlalchemy import Column, Integer, String
from database import Base


class Inventories(Base):
    __tablename__ = 'inventories'

    item_id = Column(Integer)
    quantity = Column(Integer)
    date_production_start = Column(String)
    date_received_into_inventory = Column(String)
    date_shipped_from_inventory = Column(String, primary_key=True, index=True)
