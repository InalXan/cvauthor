use actix_web::error::Error;
use mongodb::{Client, Database};

pub async fn db_connection() -> Result<Database, Error> {
    const DATABASE: &str = "mongodb://localhost:27017/";
    const DATABASE_NAME: &str = "testing";

    let client = Client::with_uri_str(DATABASE)
        .await
        .expect("Database URL is WRONG");
    let database = client.database(DATABASE_NAME);
    Ok(database)
}
