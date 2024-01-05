create table Knjiga(
	naslov varchar not null 
	, autori varchar not null 
	, žanr varchar 
	, zahtjeviZaPrijevod int not null check(zahtjeviZaPrijevod >= 0)
	, primary key (naslov, autori)
);

create table JezikZemlja(
	id char(3) not null primary key
	, jezik varchar
	, zemlja varchar
);

create table Izdanje(
	isbn char(13) not null primary key check (isbn similar to '[0-9]{13}')
	, brojIzdanja int not null
	, godinaIzdanja int not null 
	, jezik char(3) not null references JezikZemlja(id)
	, naslov1 varchar --u slučaju da je na drugom jeziku
	, opis varchar 
	, slika bytea
);

create table Izdavač(
	ime varchar not null primary key 
	, kategorija varchar not null references JezikZemlja(Id)
);

create table Ponuditelj(
	korisničkoIme varchar(32) not null primary key
	, lozinka varchar(32) not null
	, naziv varchar(64) not null unique
	, adresa varchar not null
	, epošta varchar not null --check 
	, telefon varchar not null 
	, lokacija point 
	, tip varchar not null --izdavač, antikvarijat, preprodavatelj, čekaNaOdobrenje
);

create table primjerakJe(
	isbn char(13) not null references Izdanje(isbn)
	, naslov varchar not null 
	, autori varchar not null
	, foreign key (naslov, autori) references Knjiga(naslov, autori)
	, primary key (isbn, naslov, autori)
);

create table izdaje(
	ime varchar not null references Izdavač(ime)
	, isbn char(13) not null references Izdanje(isbn)
	, primary key (ime, isbn)
);

create table dobavljivoU(
	naslov varchar not null 
	, autori varchar not null
	, foreign key (naslov, autori) references Knjiga(naslov, autori)
	, dobavljivost char(3) not null	references JezikZemlja(id)
	, primary key (naslov, autori, dobavljivost)
);

create table dostupnaNa(
	naslov varchar not null 
	, autori varchar not null
	, foreign key (naslov, autori) references Knjiga(naslov, autori)
	, jezik char(3) not null references JezikZemlja(id)
	, primary key (naslov, autori, jezik)
);

create table nudi(
	naziv varchar(64) not null references Ponuditelj(naziv)
	, ISBN char(13) not null references Izdanje(ISBN)
	, broj int not null check (broj >= 0)
	, cijena decimal(6, 2) not null check (cijena >= 0)
	, stanje varchar not null
	, primary key(ISBN, naziv)
);