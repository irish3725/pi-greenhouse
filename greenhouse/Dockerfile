
# use postgres image
FROM postgres

# set user, password, database name
ENV POSTGRES_USER monstera
ENV POSTGRES_PASSWORD adansonii
ENV POSTGRES_DB greenhouse_statistics

COPY ./sql/createScript.sql /docker-entrypoint-initdb.d/

