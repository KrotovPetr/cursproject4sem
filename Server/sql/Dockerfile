FROM postgres:14-alpine
COPY init.sql /docker-entrypoint-initdb.d/
COPY init2.sql /docker-entrypoint-initdb.d/
COPY init3.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
CMD ["postgres"]