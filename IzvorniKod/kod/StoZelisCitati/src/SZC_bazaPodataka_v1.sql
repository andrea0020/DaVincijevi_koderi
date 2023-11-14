create table Knjiga(
	isbn char(13) not null primary key check (isbn similar to '[0-9]{13}')
	, naslov varchar not null
	, autori varchar not null
	, jezik char(3) not null
	, izdavač varchar not null
	, brojIzdanja int not null
	, godinaIzdanja int not null
	, katIzdavača char(3) not null
	, zahtZaPr int not null check(zahtZaPr >= 0)
	, očuvanost varchar
	, opis varchar
	, slika bytea
	, žanr varchar not null
);

create table Knjiga_dobavljivost(
	ISBN char(13) not null references Knjiga(ISBN)
	, dobavljivost char(3) not null	
	, primary key (isbn, dobavljivost)
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
	naziv varchar(64) not null references Ponuditelj(naziv)
	, ISBN char(13) not null references Knjiga(ISBN)
	, broj int not null check (broj >= 0)
	, cijena decimal(6, 2) not null check (cijena >= 0)
	, primary key(ISBN, naziv)
);

----

revoke all on schema public from public;

create user administrator with superuser password '5959kk';

create role regKorisnik;
grant usage on schema public to regKorisnik;

grant select on table Knjiga to public;
grant select on table Knjiga_dobavljivost to public;
grant select on table nudi to public;
grant select (naziv, adresa, epošta, telefon, lokacija, tip) on Ponuditelj to public;
