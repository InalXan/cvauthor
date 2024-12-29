use actix_web::{web::get, web::resource, web::ServiceConfig, HttpResponse};

pub async fn index() -> Result<HttpResponse, actix_web::error::Error> {
    Ok(HttpResponse::Ok().body("Hello World"))
}

pub fn configure_router(router: &mut ServiceConfig) {
    router.service(resource("/").route(get().to(index)));
}
