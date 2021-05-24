/*
## Products

| name                | type      | details          |
|---------------------|-----------|------------------|
| id                  | int       | pk, increment    |
| product_name        | varchar   | not null, unique |
| price               | int       | not null         |
| labor_estimate      | int       | not null         |
| image_url           | varchar   | not null         |
| product_type        | varchar   | not null         |
| product_description | text      | not null         |
| created_at          | timestamp |                  |
| updated_at          | timestamp |                  |

*/


// const exhaust = 'exhaust'
// const engine = 'engine'
// const suspension = 'suspension'
// const wheels = 'wheels'
// const exterior = 'exterior'
// const drivetrain = 'drivetrain'


const products = [

    //exhuast

    //headers
    {
        product_name: "Stainless Power 1-7/8-Inch Long Tube Headers; Catted",
        price: 1250,
        labor_estimate: 500,
        image_url: "https://turn5.scene7.com/is/image/Turn5/390796-A?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: 'exhaust',
        product_description: 'Stainless Power Headers are manufactured to Stainless Works exact design specifications. Stainless Power Headers are CNC mandrel bent from 1-7/8" diameter, 304 stainless steel tubing for excellent exhaust flow and long lasting corrosion resistance.These Long Tube Headers feature TIG welded construction, as well as laser cut 3/8" header flanges for additional strength and leak-free performance.',

    },
    {
        product_name: "Kooks 1-7/8-Inch Long Tube Headers; Green Catted",
        price: 2000,
        labor_estimate: 500,
        image_url: "https://turn5.scene7.com/is/image/Turn5/404497?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "exhaust",
        product_description: 'For one of the finest exhaust systems on the off-road, look no further than the Kooks 1-7/8 Inch Long Tube Green Catted Headers. These high-flow long tube headers maximize the removal of exhaust gases from your cylinders better than stock with its mandrel-bent 1-7/8 inch diameter primary tubes and 3 inch collector assembly to move gases to your catalytic converters with increased efficiency.',

    },
    //cat-back
    {
        product_name: "Corsa Xtreme Cat-Back Exhaust with Polished Tips",
        price: 1700,
        labor_estimate: 100,
        image_url: "https://turn5.scene7.com/is/image/Turn5/393790?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "exhaust",
        product_description: "Xtreme Aggressive Sound. Corsa Performance Xtreme Cat-Back systems are acoustically styled and engineered to give your 5.0L Coyote powered S550 Mustang a throaty aggressive sound under acceleration and a deep growl at idle all without annoying interior cabin drone. A Corsa Xtreme Cat-Back will greatly improve your pony's exhaust flow for an increase in overall performance.",

    },
    {
        product_name: "Ford Performance by Borla Sport Cat-Back Exhaust with Chrome Tips",
        price: 1300,
        labor_estimate: 100,
        image_url: "https://turn5.scene7.com/is/image/Turn5/384388?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "exhaust",
        product_description: `Aggressive Throaty Sound. Add an aggressive throaty exhaust note to your coyote powered 2015-2017 GT Fastback with a Sport Cat-Back exhaust system that features a pair of Ford Racing straight-through sport mufflers and 4" embossed chrome exhaust tips. This catback not only sounds great, but also improves exhaust flow with the included X-Pipe for an increase in horsepower and torque.`,

    },
    //axle back
    {
        product_name: "Roush Axle-Back Exhaust",
        price: 700,
        labor_estimate: 50,
        image_url: "https://turn5.scene7.com/is/image/Turn5/387039?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "exhaust",
        product_description: `Aggressive Muscle Car Sound. Let your 5.0L Coyote engine howl with a Roush Axle-Back Exhaust. This innovative new Roush exhaust system features a hollow chambered muffler that results in increased air flow and a unique sound, with no in-cabin "boom" normally found with performance exhaust at cruising speeds.`,

    },
    {
        product_name: "LTH Muffler Delete Axle-Back Exhaust with Titan Silver Tips",
        price: 400,
        labor_estimate: 50,
        image_url: "https://turn5.scene7.com/is/image/Turn5/390798?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "exhaust",
        product_description: `Loud Throaty Aggressive Sound. A LTH Muffler Delete Axle-Back Exhaust System is especially for those GT owners that want to be heard before being seen. The mild factory exhaust note of the GT Mustang is okay for the daily driver, but not for the performance extremist that wants to broadcast their approach. This LTH Axle-Back features a muffler delete design that will add an extremely loud, aggressive, throaty exhaust note to your Coyote powered Mustang that will definitely get you noticed.`,

    },
    {
        product_name: "SR Performance Muffler Delete Axle-Back Exhaust with Polished Tips",
        price: 200,
        labor_estimate: 50,
        image_url: "https://turn5.scene7.com/is/image/Turn5/393685?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "exhaust",
        product_description: `More Power and an Aggressive Sound. If your looking to wake up the sound of your GT and the entire neighborhood for that matter, the SR Performance Muffler Delete Axle-Back Exhaust is for you. By replacing the factory mufflers with a set of straight pipes you will add an extremely loud and aggressive exhaust note to your V8 powered Pony. This Muffler Delete Axle-Back won't only improve the sound of your Pony, but it will also improve its power as well. By eliminating the restrictive stock mufflers you will increase exhaust flow for a noticeable increase in both power and performance.`,

    },
    //combo
    {
        product_name: "American Racing Headers 1-3/4-Inch Long Tube Catted Headers with X-Pipe and Pure Thunder Cat-Back Exhaust",
        price: 3200,
        labor_estimate: 600,
        image_url: "https://turn5.scene7.com/is/image/Turn5/404140?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "exhaust",
        product_description: `Unleash the Beast. The latest Mustangs have pushed the envelope on performance and handling, but the restrictive factory exhaust keeps them from their true potential.  With the American Racing Headers 1-3/4 in. Long Tube Catted Headers with X-Pipe & Pure Thunder Cat-Back Exhaust, you can provide the Mustang with the exhaust system it deserves. With the optimized design, the ARH system can unlock tremendous horsepower and torque gains. This full system includes headers, catalytic converters, an X-pipe, and ARH’s Pure Thunder Cat-back exhaust system with tips.`,

    },
    //engine
    //intake manifold
    {
        product_name: "Ford Performance GT350 5.2L Voodoo Intake Manifold",
        price: 1100,
        labor_estimate: 250,
        image_url: "https://turn5.scene7.com/is/image/Turn5/390664?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `Increase Top End Power. Are you a competitive racer on a quest to increase the top end power of your Coyote powered GT Mustang? Then look no further than a genuine Ford Racing GT350 5.2L Intake Manifold. The Shelby GT350 Intake Manifold is tuned for 7500 RPM peak power increases with little or no loss in low end torque. Designed to improve airflow which in turn produces bigger performance gains at higher RPMs, makes this GT350 Intake ideal for the racer looking for that extra boost of top end power. NOTE: requires tune and throttle body upgrade`,

    },
    {
        product_name: "Edelbrock Victor II Intake Manifold",
        price: 1300,
        labor_estimate: 250,
        image_url: "https://turn5.scene7.com/is/image/Turn5/410861?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `Premium Grade Intake Manifold. Superboost your vehicle's performance with the Edelbrock Victor II Intake Manifold. This intake manifold works for nitrous, supercharged, turbo applications, and heavy breathers designed to optimize airflow using long tapered crossover-style runners for an additional 16 horsepower and 27 pound-feet of torque. NOTE: requires tune, throttle body upgrade highly recommended`,

    },
    //superchargers
    {
        product_name: "Whipple W175AX 2.9L Intercooled Supercharger Kit; Black; Stage 1",
        price: 7400,
        labor_estimate: 1300,
        image_url: "https://turn5.scene7.com/is/image/Turn5/384438?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `Even More Power! The stock 2015-2017 GT Mustangs come with an awesome 435 Horsepower and 400 lb/ft of Torque from the factory, but after installing a Whipple Stage 1 Supercharger on your Pony, you'll be planting about 750 Horsepower and 620 lb/ft of Torque at the flywheel. NOTE: if stock, no tune required, if not stock tune REQUIRED, if you already have a tuner, tuner will need to create a custom tune, many supporting mods such as half-shaft, driveshaft, injectors, fuel system common to higher power applications HIGHLY recommended`,

    },

    {
        product_name: "Procharger High Output Stage II Intercooled Supercharger Kit with P-1SC-1; Satin Finish",
        price: 8400,
        labor_estimate: 2700,
        image_url: "https://turn5.scene7.com/is/image/Turn5/388803?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `More Horsepower! The stock Coyote powered GT Mustang came with an awesome 435 Horsepower and 400 lb/ft of Torque from the factory, but after installation a ProCharger-equipped 5.0L S550 Mustang can make 65-70% or more horsepower at the flywheel. Thanks to the industry's coolest charge air temperatures, the unmatched power gains are delivered with maximum reliability and everyday drivability. High Capacity Intercooler. If you have the desire to continue modding your Mustang even after adding a ProCharger Supercharger, then this is the kit for you. The air-to-air intercooler included with the Stage II Kit has a higher capacity than the High Output (HO) Kit. This Stage II kit will accommodate additional modifications as you continue to transform your Mustang into the highest horsepower beast possible. NOTE: Dyno tune required and many supporting mods such as half-shafts, driveshaft, injectors, fuel system HIGHLY recommended, pretty much required`,

    },
    //turbo chargers
    {
        product_name: "Hellion Twin Turbo Complete Kit",
        price: 9000,
        labor_estimate: 2500,
        image_url: "https://turn5.scene7.com/is/image/Turn5/389328?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `More Power! The Coyote powered S550 GT Mustangs came with an awesome 435 Horsepower and 400 lb/ft of Torque from the factory, but after installing a Hellion Twin Turbo Kit, you'll be planting a ground pounding 500 to 1200 Horsepower to the pavement (depending on custom tuning and fuel upgrades). Complete Kit. The Hellion Mustang Twin Turbo Kit comes with (2) Precision 55mm Turbos, (2) Turbosmart 40mm Wastegates, (2) Turbosmart VEE port bypass valves, 47 LB fuel injectors, a large vertical flow dual inlet intercooler, a handheld programmer with base tune installed and all the required parts and hardware needed to upgrade your mild manner pony to a wild snarling beast. NOTE: if not stock, custom tuning HIGHLY recommended`,

    },
    //throttle body
    {
        product_name: "Ford Performance 87mm GT350 Throttle Body",
        price: 200,
        labor_estimate: 50,
        image_url: "https://turn5.scene7.com/is/image/Turn5/390924?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `More Air for More Power. GT owners are always looking for ways to improve the power and performance of their Coyote Mustang. One way to improve both is by replacing the restrictive factory 80mm throttle body with a larger GT350 Throttle Body. Featuring a generous, free flowing 87mm single bore design, this genuine Ford Racing GT350 Throttle Body will increase air flow for an increase in power. This Throttle Body is the same exact one found as original factory equipment on all Shelby GT350's. NOTE: GT350 intake manifold required, this is not a direct replacement for stock GT throttle body`,

    },

    {
        product_name: "Whipple Billet 132mm Eliptical Throttle Body Upgrade",
        price: 600,
        labor_estimate: 50,
        image_url: "https://turn5.scene7.com/is/image/Turn5/390975?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `Better Airflow, More Power. Enhance your Mustang's performance with the Whipple Billet 132mm Elliptical Throttle Body Upgrade Kit. This aftermarket part is one of the finest fly-by-wire elliptical blade throttle bodies out in the market, with gains of up to 40 HP on standard boost levels on Whipple Supercharged Mustangs.Maximum Performance for Modified Motors. If you think this elliptical throttle body upgrade already provides a huge boost on the Whipple Mustang Kit, wait ‘til you install it on a modified motor. When this throttle body is installed in conjunction with heads, cams and exhaust upgrades you can see gains of up to 200hp - depending on tuning and boost levels. NOTE: Whipple supercharger required`,

    },
    //CAI
    {
        product_name: "Roush Cold Air Intake",
        price: 400,
        labor_estimate: 50,
        image_url: "https://turn5.scene7.com/is/image/Turn5/387035?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `Increase Horsepower and Torque. The Roush Performance Mustang Cold Air Intake kit replaces your 5.0L GT Mustangs restrictive stock air box and paper filter with a high flow filter assembly and intake tube for an increase in horsepower and torque while improving throttle response and fuel mileage. Power gains of 28 horsepower and 28 torque have been seen with the stock tune and the 85mm MAF/Venturi Insert Tube installed. More power is possible by removing the MAF/Venturi Insert Tube for a 105mm MAF bore and adding a custom tune.`,

    },
    {
        product_name: "JLT Cold Air Intake with Red Oiled Filter",
        price: 350,
        labor_estimate: 50,
        image_url: "https://turn5.scene7.com/is/image/Turn5/390000?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `More Usable Horsepower. With a JLT Performance Cold Air Intake and a custom tune installed on your 2015-2017 GT you can expect to see a huge jump in horsepower and torque at the rear wheels. The cold air intake itself is good for 15 RWHP and 12 RWTQ, but when combined with the required tune you can expect to see up to an additional 37 horsepower and 26 ft/lbs. of torque at the rear wheels over stock. In addition to an increase in power you will also see an impressive improvement in driving performance.`,

    },
    //camshafts
    {
        product_name: "Comp Cams Thumpr NSR 220/234 Hydraulic Roller Camshafts",
        price: 1600,
        labor_estimate: 1300,
        image_url: "https://turn5.scene7.com/is/image/Turn5/408670?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `Gives the Vehicle a Boost in Horsepower. Further improve your Ford Mustang GT’s mid- to high-performance setup, by replacing its factory camshafts with Comp Cams’ Thumpr NSR 220/234 Camshafts. These camshafts are designed with a 220-degree intake duration and a 234-degree exhaust duration, improving the air and exhaust flow of the vehicle’s engine. What’s more, it’s made out of high-strength material, so it’s able to handle high RPMs for a longer period of time.Tuning Is Required.Although you can install these Thumpr NSR Camshafts without springs or phaser limiters, you’ll still need to reprogram your Mustang’s ECU.This’ll ensure that you’re getting the best performance out of the camshafts.`,

    },
    //spark plugs
    {
        product_name: "NGK Laser Iridium Performance Spark Plugs",
        price: 100,
        labor_estimate: 50,
        image_url: "https://turn5.scene7.com/is/image/Turn5/64062?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `Regular Maintenance. Replacing your old weak spark plugs is paramount to keep your engine running smoothly and efficiently, so why replace them with the same old sub-par stock plugs when high performance plugs from NGK will improve fuel efficiency and lower your emissions.`,

    },
    //air oil separator
    {
        product_name: "JLT 3.0 Black Oil Separator; Passenger Side",
        price: 160,
        labor_estimate: 0,
        image_url: "https://turn5.scene7.com/is/image/Turn5/393754?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `Reduces Engine Sludge. Prevent engine sludge from impeding the power and performance of your Mustang. Installing a JLT Version 3.0 Air/Oil Separator will prevent crankcase exhaust, better known as blow-by (an oily vapor), from re-circulated back through your PCV system and intake. If left unchecked this oily vapor can solidify becoming engine sludge. This nasty sludge can coat the inside of your throttle body and intake manifold robbing you of power. A JLT 3.0 Separator is an ideal upgrade for all Mustangs that want to reduce engine sludge in order to maintain power and performance. NOTE: probably the MOST necessary mod for any Mustang GT owner due to the blow-by produced by the Coyote engine`,
    },
    //radiator
    {
        product_name: "Ford Performance Radiator",
        price: 450,
        labor_estimate: 240,
        image_url: "https://turn5.scene7.com/is/image/Turn5/384706?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `Improves Cooling. Keep your GT or GT350 Mustang running nice and cool with a Ford Performance Radiator. This aluminum radiator will drastically improve the cooling power of your 5.0L or 5.2L when compared to the factory production radiator, perfect for street and strip.`,

    },
    //injectors
    {
        product_name: "Ford Performance EV6 High Flow Fuel Injectors; 47 lb",
        price: 330,
        labor_estimate: 125,
        image_url: "https://turn5.scene7.com/is/image/Turn5/50162?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `More Power. Make sure your modded Pony is getting enough fuel for the fire with a set of Ford Racing High Flow Fuel injectors. When you're adding bolt-ons, you have to make sure the air to fuel balance is adjusted correctly to get the most from your mods. These powerful 47 lb injectors will make sure your Mustang is getting the juice it needs so you get your money's worth.`,

    },
    {
        product_name: "Fuel Injector Clinic High-Z Impedance Fuel Injectors; 1100cc",
        price: 1050,
        labor_estimate: 125,
        image_url: "https://turn5.scene7.com/is/image/Turn5/397630?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `Latest Technology. Fuel Injector Clinic's 1100cc Fuel Injector Set is the largest fuel injector available for your 1986 to 2017 Mustang GT. Using the latest technology, these saturated/high impedance ball and seat injectors provide great linearity and short pulse width repeatability for improved performance. All fuel types, including race fuels, E85, and pump gasoline are compatible with these fuel injectors.`,

    },


    {
        product_name: "DeatschWerks DW440 Brushless Fuel Pump with PWM Modulated Controller",
        price: 600,
        labor_estimate: 150,
        image_url: "https://turn5.scene7.com/is/image/Turn5/T547017?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "engine",
        product_description: `Performance Boost. Ensure efficient fuel flow by replacing your Mustang’s stock fuel pump kit with this DeatschWerks DW440 Brushless Fuel Pump with PWM Modulated Controller. This DW440 pump is engineered to deliver fuel at high pressure to optimize your GT’s performance. It flows 440 LPH at 40 PSI to support 1,000 horsepower on gas and 750 horsepower on E85.`,

    },

    //drive-train

    //half-shafts
    {
        product_name: `Ford Performance Half-Shaft Axle Assembly Upgrade Kit`,
        price: 1800,
        labor_estimate: 180,
        image_url: `https://turn5.scene7.com/is/image/Turn5/397307?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `drivetrain`,
        product_description: `Maximum Protection. Upgrade your Mustang with the Ford Performance Halfshaft Axle Assembly Upgrade Kit. Made with aerospace alloy materials and billet one-piece 34-spline inner and 32-spline outer stub ends, these halfshaft axles will ensure that your hot rod pony gets the most out of its existing torque and power.`
    },
    {
        product_name: `The Driveshaft Shop Half-Shaft Axle Upgrade; Left Side; 800 HP Rated`,
        price: 570,
        labor_estimate: 180,
        image_url: `https://turn5.scene7.com/is/image/Turn5/384852?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `drivetrain`,
        product_description: `Performance Upgrade. If your S550 Mustang is heavily modified, your factory half shafts might be too weak to take the additional punishment. But after installing Axle Half Shafts from The Driveshaft Shop you will be sure to get all your Pony's power and torque firmly planted to the pavement - where it belongs. The Driveshaft Shop half shafts are designed to handle up to 800 horsepower at the rear wheels.`
    },
    {
        product_name: `The Driveshaft Shop Half-Shaft Axle Upgrade; Right Side; 800 HP Rated`,
        price: 570,
        labor_estimate: 180,
        image_url: `https://turn5.scene7.com/is/image/Turn5/384853_alt1?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `drivetrain`,
        product_description: `Performance Upgrade. If your S550 Mustang is heavily modified, your stock half shafts might be too weak to take the additional punishment. But after installing Axle Half Shafts from The Driveshaft Shop you will be sure to get all your Pony's power and torque firmly planted to the pavement - where it belongs. The Driveshaft Shop half shafts are designed to handle up to 800 horsepower at the rear wheels.`
    },
    //clutches
    {
        product_name: `McLeod Street Pro Organic Clutch Kit; 23 Spline`,
        price: 370,
        labor_estimate: 450,
        image_url: `https://turn5.scene7.com/is/image/Turn5/401297?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `drivetrain`,
        product_description: `Enhanced Street Performance. If you’re ready to upgrade the stock clutch on your 5.0L V8 Mustang, look no further than this McLeod Street Pro Clutch - 23 Spline. It delivers good performance for Mustangs with up to 450 horsepower and street tires; you can use this clutch with mild engine mods. When you install this clutch kit on your vehicle, you’ll enjoy better holding power and smooth engagement. Technical Note. This clutch will not bolt up to the OEM flywheel with factory 9 bolt pressure plate pattern. NOTE: Flywheel will be necessary purchase`
    },
    {
        product_name: `McLeod RST Twin Disc 800HP Organic Clutch Kit with 8-Bolt Steel Flywheel; 23 Spline`,
        price: 950,
        labor_estimate: 450,
        image_url: `https://turn5.scene7.com/is/image/Turn5/409392?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `drivetrain`,
        product_description: `Street Or Strip. The McLeod RST Twin Disc Clutch is perfect for aggressive street driving and occasional drag strip use. Able to hold up to 800hp the RST Twin Disc Clutch kit is ideal for extreme horsepower Mustangs that need a good reliable street clutch. Twin Organic Discs. Featuring organic faced twin sprung hub friction discs; this RST Clutch will provide smooth engagement with a soft pedal effort and excellent release characteristics, making this a very driver friendly clutch suitable for all street performance enthusiasts. Billet Steel Flywheel. Manufactured from billet steel for extra strength, the included McLeod Flywheel features a ring gear of 164 teeth, a neutral balance and an eight bolt main pattern. Steel flywheels are perfect for street and race applications where off the line acceleration is desired.`
    },
    {
        product_name: `McLeod RXT Twin Disc 1000HP Ceramic Clutch Kit; 23 Spline`,
        price: 940,
        labor_estimate: 450,
        image_url: `https://turn5.scene7.com/is/image/Turn5/387557?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `drivetrain`,
        product_description: `Street Or Strip. The McLeod RXT Twin Disc Clutch is perfect for aggressive street driving and occasional drag strip use. Able to hold up to 1000hp the RXT Twin Disc Clutch kit is ideal for extreme horsepower Mustangs that need a good reliable street clutch. Twin Ceramic Discs. Featuring ceramic faced twin sprung hub friction discs; this RXT Clutch will provide slightly aggressive engagement with a soft pedal effort and excellent release characteristics, making this a very driver friendly clutch suitable for most street performance enthusiasts. NOTE: Ceramic clutches WILL be noisy and WILL squeak on engagement, a new flywheel purchase will be necessary as well, resurfacing is also an option but is not recommended. `
    },
    //flywheels
    {
        product_name: `McLeod Lightened Steel Flywheel; 8 Bolt`,
        price: 280,
        labor_estimate: 450,
        image_url: `https://turn5.scene7.com/is/image/Turn5/62628?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `drivetrain`,
        product_description: `Peace of Mind. When replacing or upgrading your Mustang's clutch you have two options, resurfacing your old stock flywheel, or getting a brand new flywheel. A new flywheel is a much better choice than resurfacing, as it will dictate how well your new clutch will perform, as well as how long it will last. SFI Certified. If you're using this flywheel in high performance or racing applications, SFI Certification is critical so you can run your Pony at the track or strip. And it's great for peace of mind even in a daily driver - at higher RPMs, stock cast flywheels have been known to explode. NOTE: Recommended clutch replacement at the SAME time as flywheel replacement`
    },
    {
        product_name: `McLeod Racing Aluminum Flywheel; 8 Bolt`,
        price: 380,
        labor_estimate: 450,
        image_url: `https://turn5.scene7.com/is/image/Turn5/387555?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `drivetrain`,
        product_description: `Peace of Mind. When replacing or upgrading your Mustang's clutch you have two options, resurfacing your old stock flywheel, or getting a brand new flywheel. A new flywheel is a much better choice than resurfacing, as it will dictate how well your new clutch will perform, as well as how long it will last. SFI Certified. If you're using this flywheel in high performance or racing applications, SFI Certification is critical so you can run your Pony at the track or strip. And it's great for peace of mind even in a daily driver - at higher RPMs, stock cast flywheels have been known to explode. NOTE: Recommended clutch replacement at the SAME time as flywheel replacement`
    },

    // driveshaft
    {
        product_name: `The Driveshaft Shop 3.25-Inch Carbon Fiber One Piece Driveshaft`,
        price: 1300,
        labor_estimate: 120,
        image_url: `https://turn5.scene7.com/is/image/Turn5/384849?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `drivetrain`,
        product_description: `Light Weight. Lighter and stronger than the stock 2-piece driveshaft, The Driveshaft Shop's One Piece Carbon Fiber Mustang Driveshaft greatly reduces rotating mass to improve your Pony's 1/4 mile track times. Superior Quality. Constructed from 3.25" diameter High Modulus Carbon fiber tubing this driveshaft features a solid 1350 front Spicer u-joint with flange and adapter plate to mount directly to the transmission and a 108mm 6-bolt rear CV joint made from an all new 300M material. Extra Clearance. This light weight one piece carbon fiber driveshaft features a 3.25" diameter design giving extra clearance needed to avoid interference that can happen on lowered Mustangs equipped with a 4" shaft. High Speed Balanced. Balanced on one of the most sophisticated balancing machines in the industry, at up to 9500RPM (revolutions per minute) this one piece driveshaft is rated for use up to 1000 horsepower. Application. This one piece carbon fiber driveshaft from The Driveshaft Shop is designed specifically for use on 2015-2017 GT Mustangs equipped with a 6-speed manual transmission.`
    },
    {
        product_name: `The Driveshaft Shop 3.50-Inch Aluminum One Piece Driveshaft`,
        price: 900,
        labor_estimate: 120,
        image_url: `https://turn5.scene7.com/is/image/Turn5/384848?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `drivetrain`,
        product_description: `Light Weight. Lighter and stronger than the stock 2-piece driveshaft, The Driveshaft Shop 3.50-Inch Aluminum One Piece Driveshaft greatly reduces rotating mass to improve your Pony's 1/4 mile track times. High Speed Balanced. Balanced on one of the most sophisticated balancing machines in the industry, at up to 9500RPM (revolutions per minute) this 1-piece driveshaft is rated for use up to 1000 horsepower. Application. This One Piece Aluminum Driveshaft from The Driveshaft Shop is designed specifically for use on 2015-2017 GT Mustangs equipped with a manual transmission.`
    },

    //short throw shifter
    {
        product_name: `Hurst Competition Plus Short Throw Shifter with Classic White Knob`,
        price: 370,
        labor_estimate: 200,
        image_url: `https://turn5.scene7.com/is/image/Turn5/394043?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `drivetrain`,
        product_description: `Muscle Car-Inspired. When it comes to well known shifters in the Muscle Car world, one name stands out more than most and that's Hurst. Offering their Competition Plus Shifter with Classic White Knob for your 2015-2021 MT-82, this shifter incorporates a multi-link-type design that delivers 38% throw reduction and a smooth side to side shift. This Hurst Shifter is ideal for GT, EcoBoost and V6 owners seeking a fast and smooth shifting capability on the street, track or drag strip. Superior Construction and Design. Manufactured from premium quality CNC machined billet steel, this shifter is extremely durable and precise and features a brilliant chrome plated upper stick. The classic white knob with the black engraved shift pattern and Hurst logo looks way more performance orientated than the stock shifter. This Competition Plus Shifter also includes a trigger operated reverse lockout that is chrome plated, stylish and functional.`
    },
    {
        product_name: `Barton Hybrid 3 Short Throw Shifter with Shift Knob; MT-82`,
        price: 480,
        labor_estimate: 200,
        image_url: `https://turn5.scene7.com/is/image/Turn5/394273?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `drivetrain`,
        product_description: `Precise, Smooth Shifts. The Barton Hybrid 3 Shifter with Flat Stick and Knob implementation is engineered for precise and effortless shifting on your 2015-2021 Ford Mustang GT. It's able to achieve 25% throw reduction while also increasing side-to-side distance between gears, allowing for easier, more forgiving shifts with little or no increase in noise. In addition, its side-to-side spring pressure feature lets you consistently make perfect 2-3 shifts, while its 3-bushing design eliminates most of the slop and deflection for highly accurate shifts. Superior Construction. CNC-machined in the USA from 6061 T6 billet aluminum and 303 stainless steel, for rock solid construction, this Barton short throw shifter includes all the hardware required for installation.`
    },


    //suspension
    //coil-overs
    {
        product_name: "Pedders eXtreme XA Coil-Over Kit",
        price: 1200,
        labor_estimate: 500,
        image_url: "https://turn5.scene7.com/is/image/Turn5/393835?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "suspension",
        product_description: `Track Inspired Handling. Are you looking to add the handling performance of a track car to your S550 Mustang? If you answered yes, you should replace your original factory shocks and struts with a Pedders Extreme XA Coil Over Kit. Designed to lower your Mustangs center of gravity, these Extreme XA Coil Overs will reduce body roll for flatter cornering and superior control.Height Adjustable. Pedders Extreme XA Coil Overs were designed to be height adjustable. Featuring a high grade steel lower mount these Coil Overs can be adjusted independently of one another to suite your personal taste. You can lower all four corners for a flat level appearance or raise the rear slightly for a classic raked look, the choice is entirely up to you. Adjustable Bump and Rebound. Pedders engineered their Coil Overs to be 30 position adjustable, which allows for adjustment of both bump and rebound. You can increase the stiffness of your Coil Overs for a punishing day at the track, then soften them for a comfortable ride home. Pedders Extreme XA Coil Overs are perfect for Mustangs that pull double duty as a daily commuter and a weekend warrior.`,

    },
    {
        product_name: "Roush Single Adjustable Coil-Over Kit",
        price: 1900,
        labor_estimate: 500,
        image_url: "https://turn5.scene7.com/is/image/Turn5/389794?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "suspension",
        product_description: `Race-inspired Handling. Dramatically improve the handling performance of your S550 Mustang with a Roush Single Adjustable Coil Over Kit. This Roush Performance Coil Over Kit is designed to lower the center of gravity and reduce body roll for better handling that results in flat cornering and superior directional control — perfect for track days, autocross or a spirited drive down your favorite back road.Adjustable Ride Height. Lower your S550 Mustang's stance and center of gravity from 0.8" to 1.5" up front and 1.0" to 2.0" in the rear for drastically improved cornering and handling with this Roush Performance Coil Over Kit. The coil overs come set to a 1.5" drop in front and 1.0" drop in the rear, but can be adjusted with the included tools to the desired ride height.`,

    },
    {
        product_name: "Vogtland Height Adjustable Coil-Over Kit",
        price: 1500,
        labor_estimate: 500,
        image_url: "https://turn5.scene7.com/is/image/Turn5/390364?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "suspension",
        product_description: `Sporty Handling. Dropping the stance or rake of a Mustang is something most S550 owners desire doing at some point when their pockets will allow. Maintaining a comfortable ride while improving overall handling is also a much sought after change. Make all of those things come to life when you swap out your stock suspension for this Vogtland Coilover Kit. With individual height adjustment and twin tube shocks, your 2015-2021 Mustang will acquire sporty handling and reduced body roll, all while obtaining the look you've been dreaming of for months.Height Only Adjustments. Having the ability to adjust front and rear height independently provides a nice cushion for personal preferences. Using the adjustments at the front and rear axles, your S550 can be lowered between 1.18" to 1.97" up front and 0.79" to 1.58" out back. Getting that perfect stance and ride height has never been so easy!`,

    },
    //springs
    {
        product_name: "SR Performance Sport Lowering Springs",
        price: 185,
        labor_estimate: 400,
        image_url: "https://turn5.scene7.com/is/image/Turn5/404915?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "suspension",
        product_description: `Performance Handling. SR Performance's Sport Lowering Springs are an excellent way to improve the handling performance of your S550 Mustang. These Sport Springs will lower your Mustang's center of gravity, which will reduce squat during acceleration, body roll in the corners, and excessive nose-dive under hard braking. SR Performance Sport Springs are perfectly suited for daily driving, street, and occasional track applications.Aggressive Muscle Car Stance. Not only does a set of SR Performance Sport Springs improve the handling performance of your Mustang, but they also improve its overall appearance by lowering the ride height approximately 1.2-inches front and 1.0-inches (Fastback) or 1.2-inches (Convertible) rear eliminating that huge tire to fender gap, for a more aggressive street stance.`,
    },
    {
        product_name: "Eibach Pro-Kit Performance Lowering Springs",
        price: 300,
        labor_estimate: 400,
        image_url: "https://turn5.scene7.com/is/image/Turn5/408184?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "suspension",
        product_description: `Better Street Performance. Transform your Ford Mustang GT Fastback into the ultimate street machine by installing Eibach’s Pro-Kit Lowering Springs. By lowering your vehicle’s ride height and center of gravity, you’ll get better handling, as well as be able to corner faster, stop quicker, and get better miles per gallon.For That Mean, Lowered, Muscle Car Profile. Aside from enhancing your Mustang’s handling, this spring kit is also designed to give the vehicle a more powerful appeal. The springs are design to lower the car by -1.20 inches in the front and -0.80 inches in the rear, resulting in a meaner muscle car stance.`,

    },
    {
        product_name: "Vogtland Sport Lowering Springs",
        price: 320,
        labor_estimate: 400,
        image_url: "https://turn5.scene7.com/is/image/Turn5/387016?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "suspension",
        product_description: `Performance Handling. Installing a set of Vogtland Progressive Rate Springs will lower your 2015-2021 S550 Mustang's center of gravity, which will reduce squat during acceleration, body roll in the corners, and excessive nose-dive under hard braking. Vogtland Sport Springs are ideal for daily driving, street, and even occasional track use.Lowered Muscle Car Stance. Not only does a set of Vogtland Sport Springs improve the handling performance of your Mustang, but they also improve its overall appearance. By lowering the ride height approximately 1.0" in the front and rear, that huge tire to fender gap is eliminated, providing your Mustang with a classic muscular stance.`,

    },

    //air suspension 
    {
        product_name: "Air Lift Performance 3H Complete Air Suspension Kit; 1/4-Inch Lines",
        price: 3900,
        labor_estimate: 900,
        image_url: "https://turn5.scene7.com/is/image/Turn5/393340?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "suspension",
        product_description: `Next-Level Suspension. If you're ready to take your vehicle to the next level, this Air Lift Performance 3H Height and Pressure Adjustable Air Suspension System is the kit you need. Improve your vehicle's suspension control with Air Lift Performance's most advanced air suspension kit yet. The installation immediately improves your vehicle's stance, performance, flexibility, and control. It's everything you need to keep your ride in the race.Leading Technology. This advanced air suspension kit gives you the ultimate suspension control thanks to its one-of-a-kind technology. The Air Lift Performance 3H uses 2 tried-and-true air management technologies. 4 height sensors with wiring and mounting hardware match with pressure-based control, and the 3H/3P digital controller is rich in features and engineered with the utmost in design and technology in mind.`,

    },
    {
        product_name: "Air Lift Performance 4-Way Manual Complete Air Suspension Kit; 1/4-Inch Lines",
        price: 2800,
        labor_estimate: 900,
        image_url: "https://turn5.scene7.com/is/image/Turn5/389317?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "suspension",
        product_description: `Racetrack Tuned. Countless laps and several competition events have helped the Airlift engineers hone the razor sharp handling and flat cornering nature of this airbag suspension. Adjustable. Airlift suspension kits use 30-way adjustable, monotube struts with a serious range of damping adjustment that have been specially tuned to match their progressive air springs. The 30 clicks of adjustment aren't just for fun, but rather allow the user to dial in his preferred handling feel or desired ride quality from super stiff to really soft.5" Drop; 1" Lift. This Airlift Suspension Kit allows you to drop your S550 Mustang over 5" from the stock height for a killer parked stance and with the push of a button, lift it back up so you can tear around your favorite road course or drag strip. This Airlift Suspension Kit not only allows you to drop your ride height, but it also allows you to raise it up about 1" (25mm) over the stock OEM ride height making it perfect for speed bumps or steeply angled driveways. 4-Way Manual Air Management System. The Air Lift Performance Manual Air Management System features a 4-Way Paddle Control that provides simple, accurate and smooth adjustment to all 4 wheels. Great for use with gauge and pillar pods, this system provides a maximum pressure of 175 psi. Includes an attractive stainless steel switch plate bezel.`,

    },
    //sway bars
    {
        product_name: "Eibach Anti-Roll Front and Rear Sway Bars",
        price: 500,
        labor_estimate: 200,
        image_url: "https://turn5.scene7.com/is/image/Turn5/384459?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "suspension",
        product_description: `Improves Handling. Complete your S550 Mustangs suspension upgrades with an Eibach Anti-Roll Sway Bar kit. Anti Roll Kits, sometimes referred to as Sway Bars, reduce body roll through increased design stiffness over the factory bars. The results are superior handling, flatter cornering and better stability in any driving situation. Three Position Adjustable. This Eibach Sway Bar Kit features three (3) adjustment positions on both the front and rear bars which allows for fine tuning the handling balance of your S550 Pony to suite your driving needs from mild to wild. `,

    },
    {
        product_name: "RTR Tactical Performance Adjustable Front and Rear Sway Bars",
        price: 530,
        labor_estimate: 200,
        image_url: "https://turn5.scene7.com/is/image/Turn5/397344?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "suspension",
        product_description: `Superior Handling Performance. Add track car handling performance to your daily driven S550 Mustang by upgrading to a RTR Tactical Performance 3-position adjustable Sway Bar Kit, sometimes referred to as an Anti Roll Kit. By replacing the skinny stock sway bars with much beefier Tactical Performance Sway Bars you will experience a decrease in body roll, flatter cornering and superior handling. These Sway Bars were engineered to work with your original factory suspension. However, in order to experience the maximum performance that this Sway Bar Kit can offer, it should be installed along with RTR's matching Tactical Performance Adjustable Dampers and Lowering Springs. Three-Way Adjustable. RTR engineered both their Front and Rear Tactical Performance Sway Bars with three (3) different mounting positions. These three mounting positions will make your Sway Bars adjustable. This adjustability will allow you to fine tune the handling balance of your S550 Mustang to suite your specific driving needs whether it's on the street, at the track or drifting at an autocross event. `,

    },
    {
        product_name: "Ford Strut Tower Brace; Silver",
        price: 200,
        labor_estimate: 50,
        image_url: "https://turn5.scene7.com/is/image/Turn5/386516?wid=810&hei=608&op_usm=0.8,1,10,0",
        product_type: "suspension",
        product_description: `Improves Handling, Reduces Flex. Reduce unwanted chassis flex and improve the handling of your S550 GT Mustang by installing a Ford Strut Tower Brace. The parallel beam design of this Strut Tower Brace adds additional strength to make your Mustang handle like it is on rails.`,

    },
    //wheels
    {
        product_name: "Rohana RFX11 20x10 +22",
        price: 2300,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/rohana/rfx11/rfx11_silver_white.jpg",
        product_type: "wheels",
        product_description: `These Rohana RFX11 wheels feature a Silver finish and are sure to make your ride stand out! This particular wheel setup is in 20x10 with a 22 offset. The Rohana RFX11 is a One Piece Rotary Forged wheel that features exposed lugs. These beautiful 5 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "Aodhan DS07 19x9.5 +22",
        price: 900,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/aodhan/ds07/ds07_black_white.jpg",
        product_type: "wheels",
        product_description: `These Aodhan DS07 wheels feature a Black finish and are sure to make your ride stand out! This particular wheel setup is in 19x9.5 with a 22 offset. The Aodhan DS07 is a One Piece Alloy wheel that features exposed lugs. These beautiful 10 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "Artisa ArtFormed Titan (Deco Directional) 18x8.5 +35",
        price: 900,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/artisaartformed/titan/titan_brushedapollosilver_left_white.jpg",
        product_type: "wheels",
        product_description: `The Artisa Titan was named after Italian artist Titian Vecellio and was designed to fit the sport-coupe market. Featuring a smaller number of spokes than some of our other models, the Titan is focused on being a strong, lightweight wheel that can accommodate big brakes and keep the directional styling that Artisa is known for.`,

    },
    {
        product_name: "F1R F29 18x8.5 +45",
        price: 820,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/f1r/f29/f29_silver_white.jpg",
        product_type: "wheels",
        product_description: `These F1R F29 wheels feature a Silver finish and are sure to make your ride stand out! This particular wheel setup is in 18x8.5 with a 45 offset. The F1R F29 is a One Piece Alloy wheel that features exposed lugs. These beautiful 10 spoke wheels are available in a 5x112 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "Verde Axis V99 20x10.5 +25",
        price: 1220,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/verde/axis/axis_black_white.jpg",
        product_type: "wheels",
        product_description: `These Verde Axis wheels feature a Black finish and are sure to make your ride stand out! This particular wheel setup is in 20x10.5 with a 25 offset. The Verde Axis is a One Piece Alloy wheel that features exposed lugs. These beautiful 5 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "Verde Form VFF02 20x10 +45",
        price: 1600,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/verdeform/vff02/vff02_brushed_white.jpg",
        product_type: "wheels",
        product_description: `These Verde Form VFF02 wheels feature a Brushed finish and are sure to make your ride stand out! This particular wheel setup is in 20x10 with a 45 offset. The Verde Form VFF02 is a One Piece Rotary Forged wheel that features exposed lugs. These beautiful 9 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "XXR 521 18x8.5 +25",
        price: 800,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/xxr/521/521_blackgold_white.jpg",
        product_type: "wheels",
        product_description: `These XXR 521 wheels feature a Black Gold finish and are sure to make your ride stand out! This particular wheel setup is in 18x8.5 with a 25 offset. The XXR 521 is a One Piece Alloy wheel that features exposed lugs. These beautiful 10 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "Aodhan DS01 19x9.5 +22",
        price: 1110,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/aodhan/ds01/ds01_blackchrome_white.jpg",
        product_type: "wheels",
        product_description: `These Aodhan DS01 wheels feature a Black Chrome finish and are sure to make your ride stand out! This particular wheel setup is in 19x9.5 with a 22 offset. The Aodhan DS01 is a One Piece Alloy wheel that features exposed lugs. These beautiful 7 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "Ferrada FR4 20x9 +35",
        price: 2140,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/ferrada/fr4/fr4_bronzeblack_white.jpg",
        product_type: "wheels",
        product_description: `These Ferrada FR4 wheels feature a Bronze Black finish and are sure to make your ride stand out! This particular wheel setup is in 20x9 with a 35 offset. The Ferrada FR4 is a One Piece Alloy wheel that features exposed lugs. These beautiful 10 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "Ferrada FR2 20x9 +35",
        price: 2140,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/ferrada/fr2/fr2_silverchrome_white.jpg",
        product_type: "wheels",
        product_description: `These Ferrada FR2 wheels feature a Silver Chrome finish and are sure to make your ride stand out! This particular wheel setup is in 20x9 with a 35 offset. The Ferrada FR2 is a One Piece Alloy wheel that features exposed lugs. These beautiful 5 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "ESR CS11 19x10.5 +22",
        price: 1110,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/esr/cs11/cs11_white_white.jpg",
        product_type: "wheels",
        product_description: `These ESR CS11 wheels feature a White finish and are sure to make your ride stand out! This particular wheel setup is in 19x10.5 with a 22 offset. The ESR CS11 is a One Piece Alloy wheel that features exposed lugs. These beautiful 5 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "Curva C42 20x10 +38",
        price: 1000,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/curva/c42/c42_black_white.jpg",
        product_type: "wheels",
        product_description: `These Curva C42 wheels feature a Black finish and are sure to make your ride stand out! This particular wheel setup is in 20x10 with a 38 offset. The Curva C42 is a One Piece Alloy wheel that features exposed lugs. These beautiful 5 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "American Racing Crossfire AR924 20x9 +35",
        price: 1110,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/americanracing/crossfire/crossfire_black_white.jpg",
        product_type: "wheels",
        product_description: `These American Racing Crossfire wheels feature a Black finish and are sure to make your ride stand out! This particular wheel setup is in 20x9 with a 35 offset. The American Racing Crossfire is a One Piece Alloy wheel that features exposed lugs. These beautiful 5 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "HRE FlowForm FF04 20x9 +35",
        price: 2700,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/hreflowform/ff04/ff04_black_white.jpg",
        product_type: "wheels",
        product_description: `These HRE FlowForm FF04 wheels feature a Black finish and are sure to make your ride stand out! This particular wheel setup is in 20x9 with a 35 offset. The HRE FlowForm FF04 is a One Piece Alloy wheel that features exposed lugs. These beautiful 5 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "Velgen Classic5 20x9 +32",
        price: 1500,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/velgen/classic5/classic5_silver_white.jpg",
        product_type: "wheels",
        product_description: `These Velgen Classic5 wheels feature a Silver finish and are sure to make your ride stand out! This particular wheel setup is in 20x9 with a 32 offset. The Velgen Classic5 is a One Piece Alloy wheel that features exposed lugs. These beautiful 5 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },

    {
        product_name: "Niche Sector M197 19x8.5 +35",
        price: 1130,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/niche/sector/sector_gray_white.jpg",
        product_type: "wheels",
        product_description: `These Niche Sector wheels feature a Gray finish and are sure to make your ride stand out! This particular wheel setup is in 19x8.5 with a 35 offset. The Niche Sector is a One Piece Alloy wheel that features exposed lugs. These beautiful 5 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "XXR 569 20x10.5 +40",
        price: 1000,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/xxr/569/569_black_white.jpg",
        product_type: "wheels",
        product_description: `These XXR 569 wheels feature a Black finish and are sure to make your ride stand out! This particular wheel setup is in 20x10.5 with a 40 offset. The XXR 569 is a One Piece Alloy wheel that features exposed lugs. These beautiful 5 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    {
        product_name: "Work VS XX 19x10.5 +28",
        price: 3400,
        labor_estimate: 200,
        image_url: "https://images.customwheeloffset.com/wheels/work/vsxx/vsxx_silver_white.jpg",
        product_type: "wheels",
        product_description: `These Work VS XX wheels feature a Silver finish and are sure to make your ride stand out! This particular wheel setup is in 19x10.5 with a 28 offset. The Work VS XX is a Three Piece Multi Piece wheel that features exposed lugs. These beautiful 10 spoke wheels are available in a 5x4.5 configuration and will be sure to elevate the look of your vehicle build!`,

    },
    //grilles
    {
        product_name: `RTR Upper Grille with LED Accent Vent Lights`,
        price: 200,
        labor_estimate: 120,
        image_url: `https://turn5.scene7.com/is/image/Turn5/389944_alt10?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Ready To Rock! Add the same exact Upper grille with accent LED lighting and Lower grille that are included as original equipment on the S550 Ford Mustang RTR, designed and developed by Vaughn Gittin Jr., to your very own late model muscle car for an aggressive race inspired appearance. LED Accent Lighting. This RTR upper grille is available with the very popular integrated LED Accent Lighting around the vent openings for an impressive head turning appearance. The LED Accent Lights simply plug directly into your Mustang's existing factory headlight harness with no cutting or splicing required. The LEDs are automatically activated in conjunction with your Day Time Running Lights, so they are always on when your Mustang is running. The LED Accent Lights is only compatible with the RTR Upper Grille, it is not designed to be used with factory or other aftermarket grilles. `
    },
    {
        product_name: `Hurst Upper Grille`,
        price: 120,
        labor_estimate: 120,
        image_url: `https://turn5.scene7.com/is/image/Turn5/406128_alt5?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Bold Muscle Car Styling. Transform the exterior styling of your 2015-2017 Mustang from mild mannered pony to a mean street machine with a set of Hurst Grilles. Featuring a horizontal bar design, these Hurst replacement Grilles will add bold muscle car styling to the front end of your S550 Mustang. Improves Engine Cooling. These Hurst Grilles will not only add bold, powerful styling to the front end of your S550 Mustang, but they will also increase air flow across the radiator when compared to the factory grilles. This additional air helps to improve engine cooling, which in turn increases performance.`
    },
    {
        product_name: `Cervini's C-Series Upper and Lower Grille`,
        price: 450,
        labor_estimate: 120,
        image_url: `https://turn5.scene7.com/is/image/Turn5/393738_alt7?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Aggressive Styling. Add an aggressive style to your 2015-2017 Mustang by replacing the stock upper and lower grilles with the Cervini's C-Series Upper and Lower grille Kit. Incorporating performance C-Series inspired styling, these matte black grilles do more than just look pretty. Their design increases radiator airflow to enhance the performance of your S550. Give your GT, EcoBoost or V6 Pony a boost in visual appeal and power all at the same time.`
    },
    {
        product_name: `RTR Grille Upper and Lower Grille; Black`,
        price: 450,
        labor_estimate: 120,
        image_url: `https://turn5.scene7.com/is/image/Turn5/389943_alt6?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: ``
    },

    // bumper

    {
        product_name: `MP Concepts GT350 Style Front Bumper; Unpainted`,
        price: 680,
        labor_estimate: 1000,
        image_url: `https://turn5.scene7.com/is/image/Turn5/397416_alt7?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Intimidating Shelby GT350 Styling. Transform the exterior styling of your 2015-2017 S550 Mustang with this GT350 Style Front Bumper Kit from MP Concepts. MP Concepts Front Fascia closely mimics the aggressive lines of the Shelby GT350 to give your Mustang a more intimidating appearance.`
    },
    {
        product_name: `MP Concepts GT500 Style Front Bumper`,
        price: 820,
        labor_estimate: 1000,
        image_url: `https://turn5.scene7.com/is/image/Turn5/408766_alt10?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Aggressive Shelby GT500 Styling. Transform the exterior styling of your 2015-2017 S550 Mustang with this GT500 Style Front Bumper Kit from MP Concepts. MP Concepts Front Fascia closely mimics the lines of the Shelby GT500 to give your Mustang a more aggressive appearance.`
    },
    //front splitters and spoilers
    {
        product_name: `MMD GT350 Style Chin Spoiler`,
        price: 280,
        labor_estimate: 120,
        image_url: `https://turn5.scene7.com/is/image/Turn5/394207_alt8?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Intimidating Shelby GT350 Styling. Give your 2015-2017 Mustang the intimidating styling cues of the mighty serpent with this great looking GT350 Style Chin Spoiler from Modern Muscle Design. This MMD Chin Spoiler will transform the appearance of your mild mannered Pony into an aggressive road warrior. Not only will this Spoiler improve the appearance of your Mustang, but it will also improve its aerodynamics as well.`
    },
    {
        product_name: `APR Performance Front Wind Splitter; Carbon Fiber`,
        price: 467,
        labor_estimate: 120,
        image_url: `https://turn5.scene7.com/is/image/Turn5/408782_alt3?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Carbon Fiber Front Wind Splitter by APR. Transform your vehicle's performance with the APR Performance Front Wind Splitter; Carbon Fiber. This carbon fiber front wind splitter redirects airflow under your car for improved downforce and controls.`
    },

    // spoilers
    {
        product_name: `SpeedForm GT350 Style Track Pack Rear Spoiler; Pre-Painted`,
        price: 500,
        labor_estimate: 50,
        image_url: `https://turn5.scene7.com/is/image/Turn5/394041_alt7?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `GT350 Styling. This SpeedForm GT350 Style Track Pack Rear Spoiler will give your 2015-2021 Mustang a stylish appearance with better aerodynamics. This fantastic-looking Rear Spoiler, which comes pre-painted to match your Mustang's colors, adds track appeal to your Pony and will improve your look, as well as performance.`
    },
    {
        product_name: `Scott Drake Wicker Bill Style Rear Spoiler; Satin Black`,
        price: 280,
        labor_estimate: 50,
        image_url: `https://turn5.scene7.com/is/image/Turn5/409586_alt10?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Race-Inspired Styling. Elevate your Mustang’s style by installing this Satin Black Wicker Bill Style Rear Spoiler. Its refined styling enhances your Fastback’s distinctive presence on the road and on the track. CNC technology ensures that this rear spoiler perfectly follows the contours of your muscle car for a precise fit and an appealingly sleek appearance. Better Aerodynamics. This Wicker Bill Style Rear Spoiler is designed not only to boost your Fastback’s smartly aggressive appeal but more importantly to enhance its aerodynamics and performance. Its streamlined design significantly increases the downforce on the rear of the car while maintaining traction and reducing drag. Furthermore, it improves your muscle car’s braking stability and facilitates more efficient fuel consumption.`
    },

    //decklids
    {
        product_name: `MMD Decklid Panel; Matte Black`,
        price: 180,
        labor_estimate: 50,
        image_url: `https://turn5.scene7.com/is/image/Turn5/393876-99_alt7?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Clean Custom Styling. Do you find the large factory installed rear deck lid emblem to be a little too much for your liking? If so, this MMD Deck Lid Panel is for you. Modern Muscle Design has designed a direct fit replacement Deck Lid Panel that eliminates the giant chrome emblem from the rear of your S550 Mustang. This matte black MMD Panel will give your 2015-2021 Mustang a clean custom appearance that will be sure to turn heads. This Decklid Panel looks even better when installed with MMD's matching Matte Black Tail Light Trim(Available for 2015-2017 Only).`
    },
    {
        product_name: `Hurst Decklid Panel`,
        price: 80,
        labor_estimate: 50,
        image_url: `https://turn5.scene7.com/is/image/Turn5/406123_alt7?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Embossed Hurst Lettering. Let everyone know that your Mustang is Hurst equipped by installing this great looking Hurst Deck Lid Panel. Featuring the HURST logo embossed in block style lettering across the center, this direct fit Hurst Deck Lid Panel eliminates the oversized factory emblem for a more subtle appearance.`
    },
    {
        product_name: `MMD Decklid Panel; Pre-Painted`,
        price: 300,
        labor_estimate: 50,
        image_url: `https://turn5.scene7.com/is/image/Turn5/393876_alt2?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Clean Custom Styling. Not a fan of the gloss black factory deck lid panel and its huge chrome emblem? If so, this Pre-Painted MMD Deck Lid Panel is for you. Modern Muscle Design has designed a direct fit replacement Deck Lid Panel that eliminates the giant chrome emblem from the rear of your S550 Mustang. This Pre-Painted MMD Panel will give your 2015-2021 Mustang a clean custom appearance that will be sure to turn heads. This Decklid Panel looks even better when installed with MMD's matching Pre-Painted Tail Light Trim (available for the 2015-2017 Model Years). `
    },

    // rear diffuser and valance
    {
        product_name: `MMD Base Bumper Rear Diffuser`,
        price: 220,
        labor_estimate: 50,
        image_url: `https://turn5.scene7.com/is/image/Turn5/406761_alt11?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Race Inspired Styling. Give your Non-Premium base model equipped 2015-2017 Mustang a more aggressive race inspired appearance with a MMD Rear Diffuser. This MMD Rear Diffuser is a simple and inexpensive way to alter the exterior styling of your base model Mustang.`
    },

    {
        product_name: `MP Concepts Quad Exhaust Rear Diffuser`,
        price: 250,
        labor_estimate: 50,
        image_url: `https://turn5.scene7.com/is/image/Turn5/398118_alt7?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Race Inspired Styling. Add an aggressive race car inspired appearance to your 2015-2017 Premium Package Mustang by installing a MP Concepts Quad Exhaust Rear Diffuser. Designed for use with aftermarket quad exhaust systems, this Diffuser nicely compliments the lines of your Premium Package equipped Mustangs rear bumper cover.`
    },
    {
        product_name: `MP Concepts GT350 Style Rear Diffuser`,
        price: 290,
        labor_estimate: 50,
        image_url: `https://turn5.scene7.com/is/image/Turn5/397418_alt4?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Race Inspired Appearance. Add a serious race look to your 2015-2017 Mustang with the MP Concepts GT350 Style Rear Diffuser. This is designed to fit only premium bumpers, but it will enhance the whole look of your Pony thanks to durable construction and personal touches.`
    },

    //emblems
    {
        product_name: `Ford Performance Coyote Style 5.0 Fender Emblems; Black`,
        price: 35,
        labor_estimate: 0,
        image_url: `https://turn5.scene7.com/is/image/Turn5/406519_alt3?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Perfect Accent for Ford Aficionados. Add an impressive detail to your already-impressive Ford Mustang using these Ford Performance Coyote Style 5.0 Fender Emblems. Definitely an eye-catcher, these OEM-quality emblems are sure to add a stylish, yet subtle accent that will complement your Mustang’s overall appearance. Each emblem package comes in a set of 2 – one for the driver-side, and the other for passenger-side mounting – so you can accessorize on both sides of your car.`
    },
    {
        product_name: `Ford Pony Grille Emblem; Black`,
        price: 75,
        labor_estimate: 0,
        image_url: `https://turn5.scene7.com/is/image/Turn5/410582?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Quality Pony Grille Emblem. To replace stolen or worn out emblems, look no further than the Pony Grille Emblem; Black. This iconic emblem comes with the famed pony silhouette inspired by Mustang lore, coming in a rugged black finish.`
    },

    // hoods
    {
        product_name: `Cervini's Ram Air Hood; Unpainted`,
        price: 830,
        labor_estimate: 500,
        image_url: `https://turn5.scene7.com/is/image/Turn5/390836_alt4?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Bold Enhancement. If your goal is to put fear in the eyes of fellow commuters when they glance in their rearview, then you'll want to invest in this Ram Air Hood by Cervini's. Utilizing massive front ram air scoops and dual rear heat extractor louvers, this upgrade will provide better air flow throughout the engine bay, releasing heat and keeping under hood temps down. Not only is this hood fully functional, but it adds a nasty, get out of my way demeanor to the front end of your 2015-2017 Mustang. NOTE: Labor estimate includes painting and installation.`
    },
    {
        product_name: `Anderson Composites Type-SN SuperSnake Style Hood; Double Sided`,
        price: 1700,
        labor_estimate: 100,
        image_url: `https://turn5.scene7.com/is/image/Turn5/391018_alt4?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Super Snake-Inspired Vented Design. Add a Super Snake-inspired design to your 2015-2017 Mustang when you replace the dull factory hood with this Double Sided Carbon Fiber Anderson Composites Super Snake Hood. The hood has two rear heat extractors and a center front scoop and features removable mesh screens that can be painted to coordinate with existing exterior accents. This hood is ideal for S550 owners who want to get attention and improved performance on the street, track or drag strip. NOTE: Labor estimate only includes installation.`
    },
    {
        product_name: `MP Concepts GT500 Style Aluminum Hood; Unpainted`,
        price: 870,
        labor_estimate: 500,
        image_url: `https://turn5.scene7.com/is/image/Turn5/408767?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `GT500 Styling. Add the aggressive styling of the mighty serpent to your own 2015-2017 Mustang with the MP Concepts GT500 Style Hood. This MP Concepts Hood mimics the clean powerful lines of the Shelby GT500 perfectly, making it the ideal appearance upgrade for any 2015-2017 V6, EcoBoost or GT Mustang. NOTE: Labor estimate includes painting and installation.`
    },
    {
        product_name: `SpeedForm 3-Inch Cowl Hood; Unpainted`,
        price: 650,
        labor_estimate: 500,
        image_url: `https://turn5.scene7.com/is/image/Turn5/403139_alt7?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Cowl Hood Styling. Add aggressive muscular styling to the exterior of your 2015-2017 Ford Mustang with a SpeedForm 3-inch Cowl Hood. This Hood not only looks great, but it also provides additional clearance for top end engine mods like an aftermarket supercharger. NOTE: Labor estimate includes painting and installation.`
    },
    // widebody kits
    {
        product_name: `RTR Spec 5 Wide Body Kit; Unpainted`,
        price: 3100,
        labor_estimate: 1600,
        image_url: `https://turn5.scene7.com/is/image/Turn5/406730_alt6?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `RTR Formula Drift Styling. Give your personal 2015-2017 Mustang the same aggressive styling of a track car with a RTR Spec 5 Wide Body Kit. This Body Kit was designed, developed and tested on Vaughn Gittin Jr’s Mustang RTR Spec 5D Formula Drift competition car. This Spec 5 Wide Body Kit will widen your front fenders by 50mm and your rear fenders by 75mm allowing you to run much wider wheels and tires on all four corners of your S550 Mustang. NOTE: Labor cost includes cutting, modification, priming and painting and installation.`
    },
    {
        product_name: `Clinched Flares Widebody Kit; Unpainted`,
        price: 5900,
        labor_estimate: 1900,
        image_url: `https://turn5.scene7.com/is/image/Turn5/405870?wid=810&hei=608&op_usm=0.8,1,10,0`,
        product_type: `exterior`,
        product_description: `Race-Ready Widebody Kit. Make your Mustang look even more aggressive on the race track with this Clinched Flares Widebody Kit. It’s the perfect kit for those who are looking to win, not just the races, but also the hearts of spectators. This kit comes unpainted, so you can customize it according to the specific style you want. Indeed, this widebody kit makes you stand out from the rest of the muscle cars on the track. NOTE: Labor cost includes, cutting body modification, priming and painting and installation.`
    }
]