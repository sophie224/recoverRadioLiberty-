$(document).ready(function() {
	for(var j=0;j<drawInfo.length;j++){
     addImageInContainer(j);
	}
  $('.humans_story').hide();
  setTimeout(() => {
    $(".loader-holder").css("display","none");          
  }, 2000);
});


$(function() {
  $('a[href*=\\#]:not([href=\\#])').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


let drawInfo = [
    {
      id: 0,
      src: './img/1.jpg',
      url: 'https://www.radiotavisupleba.ge/embed/player/0/29740087.html?type=video',
      text:'რაჭაში, ამბროლაურში, ერთი სახლის მეორე სართულზე არის პატარა სახელოსნო, სადაც ათობით თიხის ქანდაკება ცხოვრობს - ეს ამბროლაურელი მხატვრის, ბესო კობახიძის, ადგილია. მის ნახატებზე რამდენიმე წლის წინ დავწერე კიდეც, თუმცა მაშინ ბევრი არაფერი მომიყოლია ბესოს ამ „ამბოხებულ ორკესტრზე“, რომელიც ფრთამოტეხილი ანგელოზებისგან, თვითმფრინავის ფრთებიანი თუ მძიმე ზარს შეყუდებული მოწყენილი ტიპებისა და ჩაკეტილი სივრცის გარღვევის მსურველი, კისერზე ჩარჩოჩამოცმული ადამიანებისგან შედგება. <br> <br>  სხვებიც ბევრნი არიან და ყველა თავის თავგადასავალს ჰყვება. ყველა რაღაცას აპროტესტებს. ბესო კობახიძის ენაც პროტესტის ენაა. და ამ პროტესტის ენერგიაც ერთ პატარა ქალაქში ტრიალებს. როცა იქ ვეღარ ეტევა, ბესო კობახიძე თავის ხელოვან მეგობრებთან ერთი-ორი დღით თბილისში გამორბის ხოლმე. იმუხტება, უკან, რაჭაში, ბრუნდება და მუშაობას აგრძელებს. მთავარია, საღებავები არასოდეს გამოელიოს.',
      title:'ბესო და თიხის ამბოხებული ორკესტრი რაჭაში'
    },

    {
      id: 1,
      url: 'https://www.radiotavisupleba.ge/embed/player/0/30406991.html?type=video',
      src: './img/2.jpg',
      text:'შეეძლო სტომატოლოგი გამხდარიყო და პროფესიას, რომელსაც ერთხანს სწავლობდა, ბოლომდე მიჰყოლოდა. ან იურისტი, ან არქიტექტორი. მოკლედ, რომელიმე პოპულარული პროფესია აერჩია, როგორც ამას გულმოდგინედ ურჩევდნენ ახლობლები. მაგრამ დათო ჩაგელიშვილმა სტუდენტობის ასაკამდე დიდი ხნით ადრე იცოდა რა სურდა - უნდოდა ძველი ნივთების რესტავრატორი გამოსულიყო და თბილისში ისეთი სახელოსნო ჰქონოდა, როგორიც არავის ჰქონდა.<br> <br> არა, არ გამოგივა, არა, არ ღირს - ამ „არახალხს“ არ მოუსმინა. ყველა არაში - კი ესმოდა და მიზანს მიაღწია კიდეც. <br> <br>დღეს დათო 29 წლისაა და თავის საყვარელ საქმეს აკეთებს. თავად არის თავისი თავის ბატონიც და წესებიც დამდგენიც. 15 წლის ასაკში ერთ-ერთი პირველი ხელსაწყო თავისი ხელით გააკეთა, დღეს კი, რესტავრატორის სახელოსნო აქვს უზნაძის ქუჩაზე, სადაც ასობით ხელსაწყოა გამოფენილი. მათ გარემოცვაში კი დათო მუშაობს - უფრო სწორედ, ძველ, გადასარჩენ ნივთებს „ებრძვის“.      ',
      title:'რესტავრატორი ძველ ნივთებთან ბრძოლაში'
    },

    {
      id:2,
      url: 'https://www.radiotavisupleba.ge/embed/player/0/30652960.html?type=video',
      src:"./img/3.jpg",
      text:'„შეპყრობილები ვართ, ცით დაკავებულებიო“, თავის თავსა და რამდენიმე ენთუზიასტ მეგობარზე ამბობს გურჯაანელი დათო ჩახვაშვილი, რომელიც 20 წლის ასაკიდან თვითნაკეთ საფრენ აპარატებს აწყობს. უკვე ექვსი აპარატი შექმნა.<br> <br> დღეს უკვე 62 წლისაა, მაგრამ ფრენის სიყვარული მისი ცხოვრების ერთ-ერთი მთავარი სიყვარულია, ჰობი, გატაცება და როგორც თავად ამბობს, მისი სამყაროც. ვერტმფრენი „ვერონიკა“, პირველი საფრენი აპარატი, რომელიც თავის ხელით ააწყო, უკვე 37 წლისაა. კიდევ ჰყავს „ფასჯუნჯი“ „ქინქლა“... ხელნაკეთი თვითმფრინავი, ასევე პარაპლანი, რომლებიც დათოს მთელ ეზოს იკავებენ. <br><br> თავისი გაკეთებული აპარატებით ჯერ არ აფრენილა. რამდენჯერმე დატესტა და მერე ხარვეზების გამოსწორებაზე მუშაობდა, მაგრამ სრულყოფილი აპარატის შექმნას ცოტა მეტი ფინანსები და მხარდაჭერა სჭირდება, ვიდრე დათოს და მის მეგობარ ენთუზიასტებს აქვთ. <br> <br> პანდემია რომ გადაივლის, დათო ჩახვაშვილი თელავში წასვლას და თავისი ერთ-ერთი საფრენი აპარატის გამოცდას გეგმავს. სჯერა, აუცილებლად გაფრინდება.'  ,
      title:'დათო - ცით დაკავებული კაცი'
    },

    {
      id: 3,
      src:"./img/4.jpg",
      url: 'https://www.radiotavisupleba.ge/embed/player/0/29473493.html?type=video',
      text:'რა ხდება მაშინ, როცა საღებავებით ვეღარ ხატავ, ხატვის გარეშე ცხოვრება კი არ შეგიძლია? ეძებ ყველა შესაძლო გზას, საყვარელ საქმეს რომ არ მოსწყდე. ასე დაემართა რაჭაში მცხოვრებ მხატვარს, რუსუდან (დუსუნა) ქევანაშვილსაც, რომელსაც ალერგიის გამო წლების განმავლობაში ზეთის და სხვა საღებავებთან ახლოს მიკარებაც კი არ შეეძლო. 1990-იანი წლები იყო, გაჭირვების, სიცივის წლები. <br> <br>რუსუდანი ცდილობდა გარშემო არსებული ყველა მასალა გამოეყენებინა და ხატვა არ შეეწყვიტა - ხატავდა ნახშირით, სანთლით, პლასტილინით, პომადით, რასაც იშოვიდა და რაც ხელში ჩაუვარდებოდა. ერთ დღეს კი სახლში ფერადი საქსოვი ძაფებით სავსე ფუთა იპოვა. ძაფით ხატვაც მაშინ დაიწყო. დიდხანს ამ ნახატებს ჩვეულებრივი ფერწერული ნამუშევრებისგან ვერავინ არჩევდა. დღეს რუსუდანის ნახატები მსოფლიოს არაერთ ქალაქშია გაყიდული. ინტერნეტის წყალობით, პატარა ქალაქში მცხოვრებ მხატვარს მსოფლიოს სხვადასხვა წერტილიდან ადვილად პოულობენ.',
      title:'დუსუნა - ძაფით მხატვარი რაჭიდან'
    },

   

    {
      id: 4,
      url: 'https://www.radiotavisupleba.ge/embed/player/0/30368801.html?type=video',
      src: './img/5.jpg',
      text: 'ისინი თბილისში სულ შვიდნი დარჩნენ. ქიშო, ჟორა, მიშა, რაფიკა, სერგო, ანზორი და თემური - ფეხსაცმლის უკანასკნელი მწმენდავები, რომლებმაც ეს ხელობა მამებისა და ბაბუებისგან ისწავლეს და ზოგიერთ მათგანს ძველი ჯაგრისები რელიკვიასავით აქვს დღემდე შემონახული. <br> <br> ხელოსნების უმრავლესობა საქართველოში საუკუნეზე მეტი ხნის წინ ჩამოსახლებული ასურელების შთამომავლები არიან - უკვე ასაკში შესულები, ამბობენ, რომ ცოტაც და თბილისიდან ფეხსაცმელების ბოლო მწმენდავებიც გაქრებიან: ახალ თაობას ეს საქმე აღარ აინტერესებს. ხალხშიც სულ უფრო ცოტაა ისეთი, ვინც ფეხსაცმელების გასაწმენდად საგანგებოდ მიდის.<br><br>ეს საქმიანობა, როგორც თავად ამბობენ, მათი ბოლო საქმეა და სანამ იქნებიან, შეძლებენ და კლიენტი ეყოლებათ, თავს არ მიანებებენ. ასე არიან ქიშო და ჟორაც - სადგურის მოედანზე გამაგრებული ფეხსაცმლის მწმენდავები, რომლებისთვისაც ეს ხელობა მათი შემოსავლის მთავარი წყაროა.',
      title:'ქიშო და ჟორა: ფეხსაცმლის უკანასკნელი მწმენდავები'
    },

    {
      id: 5,
      url: 'https://www.radiotavisupleba.ge/embed/player/0/30520137.html?type=video',
      src: './img/6.jpg',
      text:'წელიწადში რამდენჯერმე 4 წლის მარიამი, დედას, თათიას, ახალციხის სოფელ კლდიდან თბილისში, ბავშვთა ჰოსპის “ციცინათელების ქვეყანაში“ მიჰყავს და იქ ერთი ან ორი კვირა რჩებიან. მარიამის დედას მხოლოდ ამ დროს შეუძლია ცოტა ხნით დასვენება, მარიამს კი სურვილების ასრულება - ტყუილად არ უწოდებენ მოფერებით ჰოსპისის „გენერალს“. <br><br> მარიამი სპინა ბიფიდას დიაგნოზით დაიბადა. ხერხემალზე ღია ჭრილობით. გადარჩენის იმედი არ არსებობდა, დატოვებაც შესთავაზეს, მაგრამ თათიამ ბრძოლის გზა აირჩია - თან მარტომ. <br><br> დღეს იცის, რომ ხერხემალზე ოპერაციის გარეშე მარიამი ფიზიკურად ვერ გაიზრდება. ოპერაცია კი ჯერ მხოლოდ ოცნების ნაწილია, რადგან თათიას შემოსავალი მარიამის 250 ლარიანი პენსია და 50 ლარიანი სოციალური დახმარებაა. <br> <br> ჯერ თათია ამ ბრძოლაში მარტოა და არც ის იცის, ოდესმე შეძლებს თუ არა შვილის უცხოეთში საოპერაციოდ წაყვანას, ან მუშაობას ისევ მარიამისთვის. რაც ზუსტად იცის, ის არის, რომ უწყვეტად ყურს უსმინოს მარიამის გულს, რომელიც მას მარჯვენა მხარეს უცემს.',

      title:'მარიამი - „ჰოსპისის გენერალი“'
    },

    {
      id: 6,
      url: 'https://www.radiotavisupleba.ge/embed/player/0/30334389.html?type=video',
      src: './img/7.jpg',
      text:'21 წლის გიულგუნ მამეთხანოვამ, 18 წელი იცხოვრა მარნეულის სოფელ თექალოში. ერთ დღეს კი დედ-მამას გამოუცხადა, რომ ის, თანატოლებივით, ადრე გათხოვებასა და სოფელში დარჩენას არ აპირებდა - დიდი მიზნები ჰქონდა: აუცილებლად ისწავლიდა უნივერსიტეტში და ბევრს იმოგზაურებდა. <br> <br> თავიდან მის ამ სურვილს დუმილით შეხვდნენ, მაგრამ გიულგუნის გადარწმუნება ადვილი არ აღმოჩნდა - ღამეებს ათენებდა, ქართულს სწავლობდა, ოლიმპიადებში იმარჯვებდა. პროფესიის არჩევის დრო რომ დადგა, მშობლებს გაუმხილა, რომ ჟურნალისტობა სურდა. სწავლის უფლება მისცეს, მაგრამ ურჩიეს, უფრო სხვა, „ქალური პროფესია“ აერჩია და გეოგრაფიის ფაკულტეტზე შეატანინეს საბუთები - ფიქრობდნენ, რომ გიულგუნიც, სხვა აზერბაიჯანელი გოგონების მსგავსად, ვინც სწავლა გააგრძელა, მასწავლებელი გახდებოდა. მაგრამ გიულგუნმა ყველაფერი გააკეთა იმისთვის, რომ თავისი ოცნება აეხდინა. მისმა 90-წამიანმა ფილმმა ნაადრევ ქორწინებაზე, რომელიც GIPA-ს მედიალაბორატორიის დახმარებით მოამზადა, 90-წამიანი ფილმების კონკურსი - DepicT-ი - მოიგო: როცა უნივერსიტეტს დაამთავრებს (ის ახლა მესამე კურსზეა), GIPA-ს მაგისტრატურაში უფასოდ შეისწავლის იმ პროფესიას, რომელზეც ოცნებობდა.',
      title:'გიულგუნი თექალოდან'
    },

    
    {
      id: 7,
      src: './img/18.jpg',
      url:'https://www.radiotavisupleba.ge/embed/player/0/30726245.html?type=video',
      text:'ორი წლის წინ, თბილისში 35 წლიანი ცხოვრების შემდეგ, ლიკა მეგრელაძე მშობლიურ გურიაში, სოფელ წითელმთაში დაბრუნდა და ახალი ცხოვრება დაიწყო. იქ მას ელოდა 80 წელს გადაცილებული დედა, თავისი წინაპრების 150 წლის ოდა, ბამბუკის ტყე, ბავშვობის პატარა მდინარე კიკვატა და რაც მთავარია, გურული მეზობლები, რომლებმაც უცებ მოიყარეს თავი ლიკას „კომლში“ და ძალიან მალე, ეს ადგილი რუკაზე ისეთ ადგილად მონიშნეს, რომელსაც გურიაში ჩასვლისას გვერდს ვეღარ უვლიან. <br> <br> ლიკა თბილისიდან იდეას გაჰყვა - ძველი გადაერჩინა, მაგრამ არც თანამედროვეობას ჩამორჩენოდა. მხარი შვილებმა და მეუღლემაც აუბეს და ასე იქცა წითელმთაში ერთი სახლი და ეზო პატარა კომუნად, სადაც ყველა საქმე განაწილებულია. სადაც სტუმარი სახლშია, მასპინძლები კი სულ რაღაც ახალს იგონებენ. „კომლში“ არ გამოვა გურული „მაი არ გამუა“ - ლიკას მიზანიც ეს არის, რომ იქაურებს დააჯეროს, ყველაფერს შეძლებენ თუ ამის სურვილი ექნებათ. მთავარია „კომლიდან“ კვამლი სულ ამოვიდეს. „კომლიც“ ხომ ძველქართულად - კვამლს ნიშნავს. და სანამ სახურავიდან კვამლი ამოდის, იქ, აბა, სიცოცხლე როგორ შეწყდება. ',
      title:'ლიკას ტყე, ლიკას მდინაე - კვამლი „კომლიდან“'
    },

    {
      id: 8,
      url:'https://www.youtube.com/embed/bFxkgMWUAw4',
      src: './img/10.jpg',
      text:'გორანი ბოშაა. მთელი ცხოვრება გზაშია. უცხოვრია 39 ქვეყნის სხვადასხვა წერტილში. ყველაზე დიდხანს კი საქართველოში შეყოვნდა. არ უყვარს, როცა ეკითხებიან - წარმოშობით საიდან ხარ? გორანი ამბობს, რომ დაიბადა ჯოჯოხეთში და მას შემდეგ ეძებს დედამიწაზე თავის სამოთხეს, რომელიც ჯერ ვერ იპოვა.',
      title:'გორანის ცხოვრების წესი'
    },

    {
      id: 9,
      url: 'https://www.radiotavisupleba.ge/embed/player/0/30282947.html?type=video',
      src: './img/9.jpg',
      text:'ლექსი ჩარკვიანი ის კაცია, ვინც თავისუფალ დროს მანქანაში ჯდება, ქუთაისიდან რაჭა-ლეჩხუმის გზას დაადგება და შემხვედრ სოფლებში ალალბედზე დაეძებს ძველ, სანახევროდ მიტოვებულ სახლებს. მერე მათ მეპატრონეს პოულობს და თუ მათ სახლის გაყიდვის სურვილი გაუჩნდებათ, საკუთარი ფეისბუკის გვერდზე - „დაკარგული სამოთხე“ ფეისბუკლაივს რთავს და დეტალურდ აღწერს როგორი სახლია, სად დგას და რა მდგომაროებაშია. <br> <br> სახლი, ზოგჯერ ლაივის დასრულებამდე იყიდება. მერე სახლის პატრონის ნომერს მიაწერს და თვითონ სხვა სოფელში აგრძელებს გზას სახლების საძებნელად. სახლის ძველი და ახალი პატრონები კი თავად ურიგდებიან ერთმანეთს ფასსა და სხვა დეტალებზე. <br> <br> ლექსოს ლაივების შემდეგ უკვე ასეთი 52 მიტოვებული სახლი გაიყიდა - მისი მიზანი ამ გზით რაჭა-ლეჩხუმში ხალხის დაბრუნებაა. ოცნებობს, რომ, როცა 100 სახლზე ავა, ყველას სადმე ერთ ეზოში მოუყაროს თავი და ერთმანეთი გააცნოს.',
      title:'ლექსო, გზები და სახლები'
    },

 
    {
      id: 10,
      url: 'https://www.radiotavisupleba.ge/embed/player/0/29977336.html?type=video',
      src: './img/14.jpg',
      text:'ბატატს სხვანაირად ტკბილ კარტოფილსაც უწოდებენ, თუმცა ამ ბოსტნეულის გემო დაახლოებით კარტოფილის, გოგრისა და წაბლის გემოებს შორისაა. ქართველებს მისი მოყვანა პირველად მე-16 საუკუნეში უცდიათ, მაგრამ მაშინ ფეხი ვერ მოუკიდებია. ხელახლა ბატატის მოყვანა, დიდ ფართობზე, შარშან ლაგოდეხელმა შოთა ერიაშვილმა სცადა. ინფორმაცია ინტერნეტში მოიძია. ნერგები გამოიწერა. დარგო, მოუარა და გამოუვიდა.<br><br> პროფესიით ბიოლოგი შოთა ერიაშვილი 81 წლისაა. დილის 6 საათზე დგება და ღამის 12-მდე თავს დასტრიალებს თავის ბატატებს. პირველი მოსავალი ოჯახს მოხმარდა, მაგრამ რადგან ბატატი მშვენივრად შეეგუა ქართულ მიწას, მერე უკვე გაყიდვაც გადაწყვიტა და ერთ-ერთ სუპერმარკეტს  მომარაგებაზეც შეუთანხმდა. ქართული ბატატი ნელ-ნელა პოპულარი ხდება, შოთა ერიაშვილს კი ახალი გეგმები აქვს: მის სათბურში უკვე იზრდება ახალი ნერგები, ოღონდ რისი - ეს ჯერ საიდუმლოა.',
      title:'შოთა და მისი პირველი "ქართული" ბატატი'
    },
    
    {
      id: 11,
      url: 'https://www.radiotavisupleba.ge/embed/player/0/30632926.html?type=video',
      src: './img/12.jpg',
      text:'26 წლის ბიოფერმერმა წნორიდან, ნიკა ბაგალიშვილმა პირველი მოსავალი მიიღო და პანდემიის გამო დაწესებული შეზღუდვების მოხსნისთანავე, თავისი პატარა მანქანით პროდუქტები გასაყიდად თბილისში ჩამოიტანა. წელს მეტ მოსავალს ელოდა, მაგრამ ამ ჯერზე არ გაუმართლა. ტრაქტორი რომ მყოლოდა, უკეთესი მოსავალი მექნებოდაო, ამბობს. <br> <br> აგროსკოლის გაკვეთილებს ისევ ონლაინ რეჟიმში აგრძელებს, თუმცა წინა კვირაში მოსწავლეები მაინც შეკრიბა და მეზობელ ბიომეურნეობაში წაიყვანა ექსკურსიაზე. მოსავალს რომ აიღებენ, თბილისში პატარა აგრობაზრობის მოწყობა უნდათ. ნიკას კი იმედი აქვს, რომ კორონავირუსის მეორე ტალღა თბილისში სიარულში ხელს არ შეუშლის და საქმის კეთებაში სეზონის ბოლომდე ხელი არ შეეშლება. თუ ყველაფერი კარგად წავიდა, იქნებ მოგროვილი ფულით ტრაქტორის ყიდვაც შეძლოს.',
      title:'ნიკას ბოსტანი წნორში - პანდემიისას '
    },
    
    {
      id: 12,
      url: 'https://www.radiotavisupleba.ge/embed/player/0/30191856.html?type=video',
      src: './img/15.jpg',
      text:'„პატარა ყურები აქვს“, - უთხრეს თაზოს დედას, მაიას, როცა თაზო დაიბადა. და ნიკაპი? იკითხა მაიამ - ნიკაპიც, უპასუხეს. საეჭვო აღარაფერი იყო - თაზო სხვანაირი დაიბადა. ის, რომ ბავშვს ყველაფერი რიგზე არ ჰქონდა, მაია მაჩაიძემ მშობიარობამდე მხოლოდ ერთი თვით ადრე შეიტყო - როცა საჩხერიდან თბილისში ჩამოვიდა და ყოველი შემთხვევისთვის, გადაამოწმა, როგორი იყო ბავშვის მდგომარეობა. პირველად სწორედ თბილისში დაეჭვდნენ. საჩხერეში თითქოს ყველაფერი რიგზე იყო, ადგილობრივ ექიმებს ეჭვი არაფერში შეუტანიათ. მაიაც ჯანმრთელ ბავშვს ელოდა. თუმცა თაზოს დიაგნოზში, რომელიც დღესაც არ არის საბოლოო, მრავლობითი ანომალიები უწერია. ექიმების ნაწილი ეჭვობს, რომ მას ტრიჩერ კოლინზის სინდრომი აქვს. უიშვიათესი დაავადება, რომელიც 50 000 ადამიანში ერთს ემართება. <br> <br> თაზოს მშობლებმა, მაიამ და გურამმა სოფლის სახლი დაკეტეს და თბილისში წამოვიდნენ. დღეს საცხოვრებელი კორპუსის პირველი სართულის სარდაფში ცხოვრობენ. გურამი ელიავაზე მუშაობს - დღიურ მუშად. ერთი დღეც რომ ჩაუვარდეს, თაზოსთვის ყოველდღიურად საჭირო თანხას, 50 ლარს ვერ მოაგროვებენ. სოციალური დახმარება, რომელსაც თაზო სახელმწიფოსგან იღებს, თაზოს საჭიროებებს მხოლოდ 5 დღე ჰყოფნის. კვირაში არის ერთი ისეთი დღე, რომელიც თაზოს ყველაზე მეტად უყვარს - ეს ბავშვთა ჰოსპისის, „ციცინათელების ქვეყნის“ დღეა - იქ თაზო დღის ცენტრში მიჰყავთ ხოლმე და ყველა სურვილს უსრულებენ. ',
      title:'თაზო - საოცრება „ციცინათელების ქვეყნიდან“'
    },
    {
      id: 13,
      url: 'https://www.radiotavisupleba.ge/embed/player/0/29477780.html?type=video',
      src: './img/16.jpg',
      text:'68 წლის რადიომოყვარული თენგიზ ფრუიძე რაჭაში, სოფელ ქვიშარში ცხოვრობს. მის კოლექციაშია 50-მდე ძველი რადიომიმღები და ერთი ხელნაკეთი რადიოსადგური, სახელად 4 L1 TF-ი. <br> <br> საქართველოშიც და მის ფარგლებს გარეთაც რადიომოყვარულებმა კარგად იციან, რომ ეს სახმობი ქვიშარელ თენგოს ეკუთვნის და სწორედ ასე უნდა მოძებნონ. <br> <br>  როცა სახლის საქმე მოთავებულია, თენგო თავის რადიოსადგურში განმარტოვდება ხოლმე და მეგობრებს ეხმიანება მთელ მსოფლიოში - მთავარი აქ ხმის გაცემაა და ერთმანეთის მოკითხვაა.',
      title:'4 L1 TF - თენგოს რადიოკუნძული რაჭაში'
    },
    
    {
      id: 14,
      url: 'https://www.radiotavisupleba.ge/embed/player/0/30432582.html?type=video',
      src: './img/13.jpg',
      text:'„ესეც ასე, მანქანა დაქირავებულია, საკვები და მედიკამენტები გვაქვს, სახლებიც მზადაა“ ამბობს ზაქარია დოლიძე და სატვირთო მანქანის საბარგულს ბოლოჯერ შეავლებს თვალს - რამდენიმე წუთში ის უსახლკარო ცხოველების დასახმარებლად გზას დაადგება. <br> <br> ზაქარია მარტო იქნება ტურში, რომელსაც თბილისიდან დაიწყებს და გაივლის მცხეთას, კასპს, გორს, ხაშურს, ქუთაისს, შემდეგ კი გურიის, სამეგრელოს და აჭარის სხვა ქალაქებს. ყველგან ელიან. <br> <br>პროფესიით რეჟისორმა უპატრონო ცხოველებისთვის სახლების კეთება მას მერე გადაწყვიტა, რაც თავისი ძაღლი - რიკი ავად გაუხდა. სოციალურ ქსელში დახმარება ითხოვა, პასუხების ძებნაში კი აღმოაჩინა, რომ უსახლკარო ცხოველებს მთელ საქართველოში შველა სჭირდებოდათ. სახლში მისულმა, ძველი კარადა გამოათრია, რომელსაც აღარ იყენებდნენ და ძაღლებისთვის პირველი სახლი გააკეთა. <br> <br> მერე ფეისბუკგვერდი შექმნა და მიუსაფარ ცხოველთა დახმარების პროექტი დაარქვა. აღწერაში კი ჩაწერა: „გამარჯობა, მე ზაქარია ვარ. ერთი ჩვეულებრივი მოკვდავი,რომელსაც გული შეტკივა მძიმე მდგომარეობაში მყოფ, ნებისმიერ სულიერ არსებაზე... დიდი კაცი რომ გავხდები და “კეთილი მანქანაც” თუ მეყოლება (მომარაგება- დასაბინავებლად) ჩემი უპირველესი ოცნებაც ასრულდება და წელში გამართული მოვედები მთელ ქვეყანას“.',
      title:'ზაქარია, „კეთილი მანქანა“ და სახლები უსახლკარო ცხოველებისთვის'
    },
    {
      id: 15,
      url: 'https://www.radiotavisupleba.ge/embed/player/0/30228215.html?type=video',
      src: './img/11.jpg',
      text:'„ტანდაბალი ადამიანი ვარ, მეტი არაფერი, ჩვეულებრივად ვშრომობ, მიყვარს, მწყინს და მიხარია, მაგრამ აქ ცხოვრება მაინც რთულია“, - ამბობს მახო ასოევი იგივე მაქსი ბავშვთა გასართობი ცენტრიდან. <br> <br> ის სენაკის შშმ ბავშვთა პანსიონატში გაიზარდა, უდედმამოდ. მახოს იქ გატარებული ყველა დღე მკაფიოდ ახსოვს - არცთუ ბედნიერად, მაგრამ, როგორც ამბობს, ესეც მისი ცხოვრების ნაწილია. 8 წლამდე ვერ დადიოდა. არც ეგონათ, რომ გაივლიდა. პანსიონატში ყველაფერი ჭირდა - იხსენებს, რომ ხშირად სციოდათ, არც საჭმელი ჰყოფნიდათ. არც ფული იცოდა რა იყო - პირველად რომ ხელში დაიჭირა, დახია და გადააგდო. <br><br> 19 წლისა პანსიონატიდან თბილისში, დედის მოსაძებნად გამოიპარა.  დიდხანს ცხოვრობდა ქუჩაში. ხან ელიავაზე იმუშავა გამყიდველად, ხან მშენებლობაზე - ცემენტის მომზელად, ხან სამებაში - სეფისკვერების საცხობში, ხან კი კოკა-კოლას საახალწლო ქარავანზე - დათვის ბელის ფორმა ეცვა. <br> <br> მახო ახლა 38 წლისაა. სახლი დღემდე არა აქვს, დროებით სოციალურ საცხოვრებელში ცხოვრობს და შშმ პირის პენსიას - თვეში 120 ლარს იღებს. შეეჩვია, რომ ხშირად უყურებენ ქუჩაში, ხან ჯუჯას ეძახიან, ხან ლილიპუტს, თუმცა თუ ადრე ამაზე ძალიან დარდობდა, დღეს ყველას პირდაპირ ეუბნება, რომ ასე ლაპარაკი არ შეიძლება: „რაც სამსახური მაქვს, უფრო თავდაჯერებული გავხდი, კომპლექსებიც დავძლიე. ხანდახან არც კი მჯერა რომ აქ ვმუშაობ", - ამბობს მახო.',
      title:'მახო - „უბრალოდ ტანდაბალი ვარ'
    },
    {
      id: 16,
      url: 'https://www.radiotavisupleba.ge/embed/player/0/30639963.html?type=video',
      src: './img/17.jpg',
      text:'„ეზო“ - რესტორანი ძველ თბილისში, რომელიც ბოლო ხუთი წელია განსხვავებული გემოვნების, პროფესიის, შეხედულებების და ეროვნების ადამიანებს უყრიდა თავის თავის სივრცეში - Covid 19-ის პანდემიის დაწყებამდე ახალ ცხოვრებას იწყებდა - განახლებული მიდგომებით და მენეჯმენტით, დიდი გეგმებით. მაგრამ პანდემია დაიწყო და „ეზოც“ დაიკეტა - ეს მოხდა გაზაფხულზე, როცა რესტორნების სეზონი იხსნება და ზამთარში დაგროვილი ვალების გადახდის იმედი ჩნდება. „ეზოს“ დამფუძნებლები გიორგი და ქრისტო კიდევ ორ მეპატრონესთან ერთად შემოსავლის გარეშე დარჩნენ და იმაზე ფიქრი დაიწყეს, როგორ გადაერჩინათ თავიანთი ბიზნესი. <br> <br> 7 ივნისს რესტორნები იხსნება, თუმცა ღირს კი ნაჩქარევად გააღონ „ეზოს“ ჭიშკარი კარგად დაგეგმვის გარეშე? ივლის ხალხი „ეზოში“? სესხი რომ აიღონ და პანდემიის მეორე ტალღა დაეწიოთ? გიო, ქრისტო, ნატო და დადა ამ ბჭობაში არიან. თვითიზოლაციაში ცხოვრებამ მეტი ფიქრის დრო გააჩინა, ერთად ყოფნის და სირთულეებზე ლაპარაკის შესაძლებლობაც. ამ სერიაში თქვენ ნახავთ როგორ უმკლავდებოდნენ ერთი არცთუ დიდი რესტორნის მფლობელები მოულოდნელ კრიზისს, რომლის წინაშეც ისინი კორონავირუსის პანდემიამ დააყენა და დაველოდებით, რა გზას იპოვიან, რომ „ეზო“ დაბრუნდეს.',
      title:'სანამ „ეზო“ დაკეტილია'
    },
    {
      id: 17,
      src: './img/8.jpg',
      url: 'https://www.radiotavisupleba.ge/embed/player/0/30199639.html?type=video',
      text:'შუაფხოში, უკანა ფშავში, ყველაზე ცოცხალი და ხმაურიანი ადგილი სკოლაა. ამ სკოლის 16 ბავშვიდან თითქმის ნახევარი, 7 მოსწავლე, სკოლის დირექტორის, ირმა ცქიფაშვილის შვილია. ირმას და მის მეუღლეს, ზაზა ჯაბანიშვილს, რომელიც შუაფხო-თბილისის რეისის სამარშრუტო მიკროავტობუსის მძღოლია და სკოლის მოსწავლეებსა და მასწავლებლებსაც ტრანსპორტით ის ემსახურება, 10 შვილი ჰყავთ. <br> <br> როცა ირმას და ზაზას შვილები (თავიანთ კლასელებთან ერთად) სკოლას დაამთავრებენ, შუაფხოს სკოლაში შეიძლება ცალ ხელზე ჩამოსათვლელი მოსწავლეც აღარ დარჩეს. დღესაც სკოლას არ ჰყავს მეორე, მერვე და მეთერთმეტე კლასის მოსწავლეები. ხეობა თითქმის დაცლილია. <br> <br> შუაფხოში არ არის მაღაზია, არც აფთიაქი. ამიტომ ყველას და მათ შორის ირმას და ზაზას ოჯახსაც, მუდმივად მარაგის კეთება უწევს. ძირითადად - თბილისში წამოსულ ზაზას აბარებენ ხოლმე აუცილებელ პროდუქტს, წამალს თუ სხვა საჭირო ნივთებს. მათი, ორივეს ხელფასი მხოლოდ აუცილებელ ხარჯებს ფარავს. ხშირად - გაჭირვებით. <br><br>ირმა  ამბობს, რომ სკოლაზე, მოსწავლეებისა და მასწავლებლების უსაფრთხოებაზე ზრუნვას და სხვა ათასი წვრილმანი პრობლემის მოგვარებას მისი დროის უდიდესი ნაწილი მიაქვს. თავისუფალი დრო კი თითქმის არ რჩება. და ყველაზე დილა ასე იწყება - 3 წუთი სარკესთან და ისევ სკოლისკენ. 5 ოქტომბერს მსოფლიო მასწავლებლის დღეს აღნიშნავს. ეს დღე - ირმას დღეცაა. ',
      title:'დედა, მამა, 10 ბავშვი და მიკროავტობუსი ფშავიდან'
    }
    
]



let addImageInContainer = function(j) {
  $(".masonry").append(columnMarkup(j));
}


function columnMarkup(i){
  if(drawInfo[i]){
    let drawRows =` 
      <div class="brick ">
        <img src="${drawInfo[i].src}" class="modalImg" id=${i}>
        <p class="each_person_title">${drawInfo[i].title}</p>
        <p class="each_person_description"> ${drawInfo[i].text}</p>
      </div>
    `
    return drawRows;
  }
}	

$('.scroll_down').click(function(){ 
    $(this).hide();
    $('.humans_story').show(); 
    $('footer').css('display','flex');
}); 



$('.logo a').click(function(){ 
  $('.scroll_down').show();
  $('.humans_story ').hide();
  $('footer').hide();
}); 

/*modalbox*/
let modal = document.getElementById("myModal");

let imgBtn = document.getElementsByClassName("modalImg");
let span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
  stopVideo();
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo();
  }
}

function clickForVideo(){
  $(imgBtn).click(function() {
    modal.style.display = "block";
    let getImgId = $(this).attr('id');
    console.log("getImgId",getImgId);
    setVideoInModal(getImgId);
  });
}

function setVideoInModal(imgId){
  for(let i=0;i<drawInfo.length;i++){
    if(drawInfo[i].id === parseInt(imgId)){
      let src=drawInfo[i].url;
      $(".video-iframe").attr('src', src);
    }
  }
}

$(document).on('click', '.modalImg', function() {
  clickForVideo();
});

$(window).scroll(function(){ 
  if ($(this).scrollTop() > 200) { 
    $('#scroll').fadeIn(); 
  } else { 
    $('#scroll').fadeOut(); 
  } 
}); 

$('#scroll').click(function(){ 
  $("html, body").animate({ scrollTop: 0 }, 600); 
  return false; 
}); 

function stopVideo() {
  var currentIframe = document.querySelector('.modal-content > iframe');
  currentIframe.src = currentIframe.src;
}