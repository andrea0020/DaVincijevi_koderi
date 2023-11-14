insert into Knjiga values 
	('9789533607627', 'Pustolovine Toma Sawyera' 
	 , 'Mark Twain', 'hrv', 'Znanje', 1, 2023
	 , 'hrv', 0, 'nova', null, null, 'Pustolovina, Roman za mlade');
insert into Knjiga_dobavljivost values
	('9789533607627', 'hrv');

insert into Knjiga values 
	('9789538398285', 'Idiot'
	 , 'Fjodor Mihajlovič Dostojevki', 'hrv', 'Bodoni'
	 , 1, 2023, 'hrv', 0, 'nova', null, null, 'Klasik');
insert into Knjiga_dobavljivost values
	('9789538398285', 'hrv');
	
insert into Knjiga values 
	('9789533608167', 'Mali princ'
	 , 'Antoine de Saint-Exupery', 'hrv', 'Znanje', 1, 2023
	 , 'hrv', 0, 'nova', null, null, 'Klasik, Dječja književnost');
insert into Knjiga_dobavljivost values
	('9789533608167', 'hrv');
insert into Knjiga_dobavljivost values
	('9789533608167', 'srb');
insert into Knjiga_dobavljivost values
	('9789533608167', 'bih');
	
insert into Knjiga values 
	('9789538318092', 'Stakleno zvono'
	 , 'Sylvia Plath', 'hrv', 'Indigo'
	 , 1, 2023, 'hrv', 0, 'nova', null, null, 'Klasik, Poezija');
insert into Knjiga_dobavljivost values
	('9789538318092', 'hrv');
insert into Knjiga_dobavljivost values
	('9789538318092', 'bih');
	
insert into Ponuditelj values
	('Znanje', 'lozinkaZnanje', 'Znanje', 'Gajeva ulica 1, 10000 Zagreb'
	, 'znanje@email.com', '111111', (45.81307695382491, 15.976550894033364), 'Izdavač');

insert into Ponuditelj values
	('JIT', 'lozinkaJIT', 'Jesenski i Turk', 'Ulica Farkaša Vukotinovića 4, 10000 Zagreb'
	, 'jit@email.com', '222222', (45.807576825115405, 15.968273440697425), 'Antikvarijat');

insert into Ponuditelj values
	(Huso, 'lozinkaHuso', 'Huso i sinovi d.o.o.', 'Sime Milutinovića Sarajlije 7, 71000 Srajevo'
	, 'huso@email.com', '333333', (43.85814164463597, 18.42655700278929), 'Preprodavač');