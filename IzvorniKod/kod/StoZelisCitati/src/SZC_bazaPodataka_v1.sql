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
	, naziv varchar(64) not null
	, adresa varchar not null
	, epošta varchar not null --check 
	, telefon varchar not null 
	, lokacija point 
);

create table ČekaOdobrenje(
	korisničkoIme varchar(32) primary key references Ponuditelj(korisničkoIme)
		on delete no action
	, status varchar
);

create table Izdavač(
	korisničkoIme varchar(32) primary key references Ponuditelj(korisničkoIme)
);

create table Antikvarijat(
	korisničkoIme varchar(32) primary key references Ponuditelj(korisničkoIme)
);

create table Preprodavač(
	korisničkoIme varchar(32) primary key references Ponuditelj(korisničkoIme)
);

create table nudi(
	korisničkoIme varchar(32) not null references Ponuditelj(korisničkoIme)
	, ISBN char(13) not null references Knjiga(ISBN)
	, broj int not null check (broj >= 0)
	, cijena decimal(6, 2) not null check (cijena >= 0)
	, primary key(ISBN, korisničkoIme)
);
