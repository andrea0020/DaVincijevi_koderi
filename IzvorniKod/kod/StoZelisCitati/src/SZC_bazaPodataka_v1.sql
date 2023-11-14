create table Knjiga(
	isbn char(13) not null primary key check (isbn similar to '[0-9]{13}')
	, naslov varchar not null
	, jezik char(3) not null
	, izdavač varchar not null
	, brojIzdanja int not null
	, godinaIzdanja int not null
	, katIzdavača char(3) not null
	, zahtZaPr int not null check(zahtZaPr >= 0)
	, očuvanost varchar
	, opis varchar
	, slika bytea
);

create table Knjiga_dobavljivost(
	ISBN char(13) not null primary key references Knjiga(ISBN)
	, dobavljivost char(3) not null	
);

create table Knjiga_autori(
	ISBN char(13) not null primary key references Knjiga(ISBN)
	, autor varchar not null
);

create table Knjiga_žanr(
	isbn char(13) not null primary key references Knjiga(isbn)
	, žanr varchar not null
);

create table Ponuditelj(
	korisničkoIme varchar(32) not null primary key
	, lozinka varchar(32) not null
	, naziv varchar(64) not null unique
	, adresa varchar not null
	, epošta varchar not null --check 
	, telefon varchar not null 
	, lokacija point 
	, tip varchar not null
);

create table ČekaOdobrenje(
	korisničkoIme varchar(32) primary key references Ponuditelj(korisničkoIme)
		on delete no action
	, status varchar
);

create table nudi(
	--korisničkoIme varchar(32) not null references Ponuditelj(korisničkoIme)
	naziv varchar(64) not null references Ponuditelj(naziv)
	, ISBN char(13) not null references Knjiga(ISBN)
	, broj int not null check (broj >= 0)
	, cijena decimal(6, 2) not null check (cijena >= 0)
	, primary key(ISBN, naziv)
);

----

--revoke connect on database StoZelisCitati from public;
revoke all on schema public from public;
/*
create role administrator with createuser password '5959kk';
grant connect, create on database StoZelisCitati to administrator;
grant all on schema public to administrator;
grant all privileges on all tables in schema public to administrator;
*/

create user administrator with superuser password '5959kk';

create role ponuditelj;
grant usage on schema public to punuditelj;

grant select on table Knjiga to public;
grant select on table Knjiga_autori to public;
grant select on table Knjiga_dobavljivost to public;
grant select on table Knjiga_žanr to public;
grant select on table nudi to public;
grant select (naziv, adresa, epošta, telefon, lokacija, tip) on Ponuditelj to public;
