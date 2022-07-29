-- Clearing existing data
DELETE FROM public.airport;

-- Inserting Airports
INSERT INTO public.airport
	(
		code, 
		name, 
		country, 
		city, 
		address
	)
	VALUES
	(
		'SVO', 
		'Sheremetyevo International Airport', 
		'RUSSIA', 
		'Moscow', 
		'Sheremetyevo'
	);

INSERT INTO public.airport
	(
		code, 
		name, 
		country, 
		city, 
		address
	)
	VALUES
	(
		'DME', 
		'Domodedovo International Airport', 
		'RUSSIA', 
		'Moscow', 
		'Domodedovo'
	);
