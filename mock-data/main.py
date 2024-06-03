import polars
from sqlalchemy import create_engine

def load_csv_with_polars(file_path):
    return polars.read_csv(file_path)

def create_db_engine(user, password, host, port, database):
    connection_string = f"postgresql://{user}:{password}@{host}:{port}/{database}"
    engine = create_engine(connection_string)
    return engine

def export_data_to_postgres(dataframe, table_name, engine):
    dataframe.to_pandas().to_sql(table_name, engine, if_exists='replace', index=False)

if __name__ == "__main__":
    file_path = "test-project-data.csv"
    table_name = "inventories"
    db_credentials = {
        "user": "postgres",
        "password": "admin",
        "host": "127.0.0.1",
        "port": "5432",
        "database": "inventory"
    }

    df = load_csv_with_polars(file_path)
    engine = create_db_engine(**db_credentials)
    export_data_to_postgres(df, table_name, engine)