--	
insert into Ponuditelj values
	('Znanje', 'lozinkaZnanje', 'Znanje', 'Gajeva ulica 1, 10000 Zagreb'
	, 'znanje@email.com', '111111', POINT(45.81307695382491, 15.976550894033364), 'Izdavač');

insert into Ponuditelj values
	('JIT', 'lozinkaJIT', 'Jesenski i Turk', 'Ulica Farkaša Vukotinovića 4, 10000 Zagreb'
	, 'jit@email.com', '222222', POINT(45.807576825115405, 15.968273440697425), 'Antikvarijat');

insert into Ponuditelj values
	('Huso', 'lozinkaHuso', 'Huso i sinovi d.o.o.', 'Sime Milutinovića Sarajlije 7, 71000 Srajevo'
	, 'huso@email.com', '333333', POINT(43.85814164463597, 18.42655700278929), 'Preprodavač');
--	
	
	
--
insert into JezikZemlja (id, jezik, zemlja) values
	('HRV', 'Hrvatski', 'Hrvatska')
	, ('SRB', 'Srpski',  'Srbija')
	, ('SLO', 'Slovenski', 'Slovenija')
	, ('BIH', null, 'Bosna i Hercegovina')
	, ('GBR', 'Engleski', 'Velika Britanija')
	, ('USA', 'Engleski', 'Sjedinjene Američke Države')
	, ('FRA', 'Francuski', 'Francuska')
	, ('ENG', 'Engleski', null);
--


--
insert into Izdavač (ime, kategorija) values
	('Znanje', 'HRV')
	, ('Bodoni', 'HRV')
	, ('Indigo', 'HRV')
	, ('Penguin Books', 'GBR')
	, ('Naklada Ljevak', 'HRV')
	, ('Marston Book Service', 'GBR')
	, ('Petrine knjige', 'HRV')
	;
--


--
insert into Knjiga (naslov, autori, žanr, zahtjeviZaPrijevod) values
	('Pustolovine Toma Sawyera', 'Mark Twain', 'Pustolovina, Roman za mlade', 0)
	, ('Pustolovine Huckleberryja Finna', 'Mark Twain', 'Pustolovina, Roman za mlade, Klasik', 0)
	, ('Idiot', 'Fjodor Mihajlovič Dostojevki', 'Klasik', 0)
	, ('Mali princ', 'Antoine de Saint-Exupery', 'Klasik, Dječja književnost', 0)
	, ('Stakleno zvono', 'Sylvia Plath', 'Klasik, Poezija', 100)
	, ('Ponos i predrasude', 'Jane Austen', 'Klasik, Ljubavni roman', 50)
	;
--


--
insert into Izdanje (isbn, brojIzdanja, godinaIzdanja, jezik, naslov1, opis, slika) values
	('9789533607627', 1, 2023, 'HRV', null, null, null)
	, ('9781435171831', 1, 2023, 'ENG', 'Adventures of Huckleberry Finn' 
		, 'Fresh off of his escapades with Tom Sawyer and with six thousand dollars in the bank, Huck Finn faces a new challenge'
		, null)
	, ('9781435159648', 1, 2015, 'ENG', 'Adventures of Huckleberry Finn', null, null)
	, ('9789538398285', 1, 2023, 'HRV', null, null, null)
	, ('9789538423086', 1, 2022, 'HRV', null, null, null)
	, ('9789533608167', 1, 2023, 'HRV', null, null, null)
	, ('9789538318092', 1, 2023, 'HRV', null, null, null)
	, ('9781398812338', 1, 2022, 'ENG', 'Pride and prejudice', null, null)
	;
--


--
insert into primjerakJe (isbn, naslov, autori) values
	('9789533607627', 'Pustolovine Toma Sawyera', 'Mark Twain')
	, ('9781435171831', 'Pustolovine Huckleberryja Finna', 'Mark Twain')
	, ('9781435159648', 'Pustolovine Huckleberryja Finna', 'Mark Twain')
	, ('9789538398285', 'Idiot', 'Fjodor Mihajlovič Dostojevki')
	, ('9789538423086', 'Idiot', 'Fjodor Mihajlovič Dostojevki')
	, ('9789533608167', 'Mali princ', 'Antoine de Saint-Exupery')
	, ('9789538318092', 'Stakleno zvono', 'Sylvia Plath')
	, ('9781398812338', 'Ponos i predrasude', 'Jane Austen')
	;
--


--
insert into izdaje (ime, isbn) values
	('Znanje', '9789533607627')
	, ('Marston Book Service', '9781435171831')
	, ('Marston Book Service', '9781435159648')
	, ('Bodoni', '9789538398285')
	, ('Petrine knjige', '9789538423086')
	, ('Znanje', '9789533608167')
	, ('Indigo', '9789538318092')
	, ('Marston Book Service', '9781398812338')
	;
--