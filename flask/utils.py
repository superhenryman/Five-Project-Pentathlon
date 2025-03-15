import sqlite3
import time

class DatabaseConnectionError(Exception):
    pass

def get_conn():
    retry_count = 5
    for attempt in range(retry_count):
        try:
            conn = sqlite3.connect("confessions.db")
            return conn
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            time.sleep(2 ** attempt)
    raise DatabaseConnectionError("Failed to connect to the database after multiple attempts.")

def init_db():
    with get_conn() as conn:
        cursor = conn.cursor()
        cursor.execute("CREATE TABLE IF NOT EXISTS confessions(id INTEGER PRIMARY KEY, confession TEXT NOT NULL)")
        conn.commit()

def insert_confession(confession):
    with get_conn() as conn:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO confessions (confession) VALUES (?)", (confession,))
        conn.commit()
