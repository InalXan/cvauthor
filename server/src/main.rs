use actix_web::{web, App, HttpServer};
use std::sync::Arc;
// db
#[path = "./db/connection.rs"]
mod connection;
use connection::db_connection;
// router
#[path = "./router/index.rs"]
mod index;
use index::configure_router;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // host configure
    let host = "127.0.0.1:8081";
    let host_err = "Server Not Working";
    // database error handling
    let connection = db_connection();
    let db_connection = match connection.await {
        Ok(conn) => {
            println!("Database Connection Succesfully");
            Arc::new(conn)
        }
        Err(e) => {
            eprintln!("Database Connection Unsuccesfully: {}", e);
            return Err(std::io::Error::new(
                std::io::ErrorKind::Other,
                "Database Connection Failed",
            ));
        }
    };
    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::from(db_connection.clone()))
            .configure(configure_router)
    })
    .bind(host)
    .expect(host_err)
    .workers(2)
    .run()
    .await
}
