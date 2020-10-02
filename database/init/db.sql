/* Create and init data */

--Temp and Humidity--

CREATE TABLE IF NOT EXISTS THdata (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        temperature NUMERIC,
        humidity NUMERIC,
        currentdate DATE,
        currentime TIME
)