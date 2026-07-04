// ─── SOFRIM DATA.JS ───────────────────────────────────────────
// 81 il, tüm ilçeler ve vergi daireleri

const IL_DATA = {
  'Adana': {
    ilceler: ['Aladağ','Ceyhan','Çukurova','Feke','İmamoğlu','Karaisalı','Karataş','Kozan','Pozantı','Saimbeyli','Sarıçam','Seyhan','Tufanbeyli','Yumurtalık','Yüreğir'],
    vergidaireleri: ['Adana İhtisas VD','5 Ocak VD','Yüreğir VD','Seyhan VD','Ziyapaşa VD','Çukurova VD','Ceyhan VD','Kozan VD','Karataş VD','Feke Malmüdürlüğü','Karaisalı Malmüdürlüğü','Pozantı Malmüdürlüğü','Saimbeyli Malmüdürlüğü','Tufanbeyli Malmüdürlüğü','Yumurtalık Malmüdürlüğü','Aladağ Malmüdürlüğü','İmamoğlu Malmüdürlüğü']
  },
  'Adıyaman': {
    ilceler: ['Besni','Çelikhan','Gerger','Gölbaşı','Kahta','Merkez','Samsat','Sincik','Tut'],
    vergidaireleri: ['Adıyaman VD','Kahta VD','Besni Malmüdürlüğü','Çelikhan Malmüdürlüğü','Gerger Malmüdürlüğü','Gölbaşı Malmüdürlüğü','Samsat Malmüdürlüğü','Sincik Malmüdürlüğü','Tut Malmüdürlüğü']
  },
  'Afyonkarahisar': {
    ilceler: ['Başmakçı','Bayat','Bolvadin','Çay','Çobanlar','Dazkırı','Dinar','Emirdağ','Evciler','Hocalar','İhsaniye','İscehisar','Kızılören','Merkez','Sandıklı','Sinanpaşa','Sultandağı','Şuhut'],
    vergidaireleri: ['Tınaztepe VD','Kocatepe VD','Dinar VD','Bolvadin VD','Emirdağ VD','Sandıklı VD','İscehisar VD','Çay VD','Dazkırı Malmüdürlüğü','İhsaniye Malmüdürlüğü','Sinanpaşa Malmüdürlüğü','Sultandağı Malmüdürlüğü','Şuhut Malmüdürlüğü','Başmakçı Malmüdürlüğü','Bayat Malmüdürlüğü','Çobanlar Malmüdürlüğü','Evciler Malmüdürlüğü','Hocalar Malmüdürlüğü','Kızılören Malmüdürlüğü']
  },
  'Ağrı': {
    ilceler: ['Diyadin','Doğubeyazıt','Eleşkirt','Hamur','Merkez','Patnos','Taşlıçay','Tutak'],
    vergidaireleri: ['Ağrı VD','Doğubeyazıt VD','Patnos VD','Diyadin Malmüdürlüğü','Eleşkirt Malmüdürlüğü','Hamur Malmüdürlüğü','Taşlıçay Malmüdürlüğü','Tutak Malmüdürlüğü']
  },
  'Amasya': {
    ilceler: ['Göynücek','Gümüşhacıköy','Hamamözü','Merkez','Merzifon','Suluova','Taşova'],
    vergidaireleri: ['Amasya VD','Merzifon VD','Gümüşhacıköy VD','Taşova VD','Suluova VD','Göynücek Malmüdürlüğü','Hamamözü Malmüdürlüğü']
  },
  'Ankara': {
    ilceler: ['Akyurt','Altındağ','Ayaş','Bala','Beypazarı','Çamlıdere','Çankaya','Çubuk','Elmadağ','Etimesgut','Evren','Gölbaşı','Güdül','Haymana','Kahramankazan','Kalecik','Keçiören','Kızılcahamam','Mamak','Nallıhan','Polatlı','Pursaklar','Sincan','Şereflikoçhisar','Yenimahalle'],
    vergidaireleri: ['Anadolu İhtisas VD','Ankara İhtisas VD','Veraset ve Harçlar VD','Kavaklıdere VD','Maltepe VD','Yenimahalle VD','Çankaya VD','Kızılbey VD','Mithatpaşa VD','Ulus VD','Yıldırım Beyazıt VD','Seğmenler VD','Dikimevi VD','Doğanbey VD','Yeğenbey VD','Hitit VD','Yahya Galip VD','Muhammet Karagüzel VD','Ostim VD','Gölbaşı VD','Sincan VD','Dışkapı VD','Etimesgut VD','Başkent VD','Cumhuriyet VD','Keçiören VD','Kahramankazan VD','Polatlı VD','Şereflikoçhisar VD','Beypazarı VD','Çubuk VD','Haymana VD','Elmadağ VD','Ayaş Malmüdürlüğü','Bala Malmüdürlüğü','Çamlıdere Malmüdürlüğü','Güdül Malmüdürlüğü','Kalecik Malmüdürlüğü','Kızılcahamam Malmüdürlüğü','Nallıhan Malmüdürlüğü','Akyurt Malmüdürlüğü','Evren Malmüdürlüğü']
  },
  'Antalya': {
    ilceler: ['Akseki','Aksu','Alanya','Demre','Döşemealtı','Elmalı','Finike','Gazipaşa','Gündoğmuş','İbradı','Kaş','Kemer','Kepez','Konyaaltı','Korkuteli','Kumluca','Manavgat','Muratpaşa','Serik'],
    vergidaireleri: ['Üçkapılar VD','Kalekapı VD','Muratpaşa VD','Düden VD','Antalya Kurumlar VD','Antalya İhtisas VD','Korkuteli VD','Alanya VD','Serik VD','Manavgat VD','Elmalı VD','Kemer VD','Kumluca VD','Akseki Malmüdürlüğü','Finike Malmüdürlüğü','Gazipaşa Malmüdürlüğü','Gündoğmuş Malmüdürlüğü','Kaş Malmüdürlüğü','Demre Malmüdürlüğü','İbradı Malmüdürlüğü']
  },
  'Artvin': {
    ilceler: ['Ardanuç','Arhavi','Borçka','Hopa','Merkez','Murgul','Şavşat','Yusufeli'],
    vergidaireleri: ['Artvin VD','Hopa VD','Arhavi VD','Ardanuç Malmüdürlüğü','Borçka Malmüdürlüğü','Şavşat Malmüdürlüğü','Yusufeli Malmüdürlüğü','Murgul Malmüdürlüğü']
  },
  'Aydın': {
    ilceler: ['Bozdoğan','Buharkent','Çine','Didim','Efeler','Germencik','İncirliova','Karacasu','Karpuzlu','Koçarlı','Köşk','Kuşadası','Kuyucak','Nazilli','Söke','Sultanhisar','Yenipazar'],
    vergidaireleri: ['Efeler VD','Güzelhisar VD','Nazilli VD','Söke VD','Çine VD','Germencik VD','Kuşadası VD','Didim VD','Bozdoğan Malmüdürlüğü','Karacasu Malmüdürlüğü','Koçarlı Malmüdürlüğü','Kuyucak Malmüdürlüğü','Sultanhisar Malmüdürlüğü','Yenipazar Malmüdürlüğü','Buharkent Malmüdürlüğü','İncirliova Malmüdürlüğü','Karpuzlu Malmüdürlüğü','Köşk Malmüdürlüğü']
  },
  'Balıkesir': {
    ilceler: ['Altıeylül','Ayvalık','Balya','Bandırma','Bigadiç','Burhaniye','Dursunbey','Edremit','Erdek','Gömeç','Gönen','Havran','İvrindi','Karesi','Kepsut','Manyas','Marmara','Savaştepe','Sındırgı','Susurluk'],
    vergidaireleri: ['Karesi VD','Kurtdereli VD','Ayvalık VD','Bandırma VD','Burhaniye VD','Edremit VD','Gönen VD','Susurluk VD','Erdek VD','Bigadiç VD','Sındırgı VD','Dursunbey VD','Balya Malmüdürlüğü','Havran Malmüdürlüğü','İvrindi Malmüdürlüğü','Kepsut Malmüdürlüğü','Manyas Malmüdürlüğü','Savaştepe Malmüdürlüğü','Marmara Malmüdürlüğü','Gömeç Malmüdürlüğü']
  },
  'Bilecik': {
    ilceler: ['Bozüyük','Gölpazarı','İnhisar','Merkez','Osmaneli','Pazaryeri','Söğüt','Yenipazar'],
    vergidaireleri: ['Bilecik VD','Bozüyük VD','Gölpazarı Malmüdürlüğü','Osmaneli Malmüdürlüğü','Pazaryeri Malmüdürlüğü','Söğüt Malmüdürlüğü','Yenipazar Malmüdürlüğü','İnhisar Malmüdürlüğü']
  },
  'Bingöl': {
    ilceler: ['Adaklı','Genç','Karlıova','Kiğı','Merkez','Solhan','Yayladere','Yedisu'],
    vergidaireleri: ['Bingöl VD','Genç Malmüdürlüğü','Karlıova Malmüdürlüğü','Kiğı Malmüdürlüğü','Solhan Malmüdürlüğü','Adaklı Malmüdürlüğü','Yayladere Malmüdürlüğü','Yedisu Malmüdürlüğü']
  },
  'Bitlis': {
    ilceler: ['Adilcevaz','Ahlat','Güroymak','Hizan','Merkez','Mutki','Tatvan'],
    vergidaireleri: ['Bitlis VD','Tatvan VD','Adilcevaz Malmüdürlüğü','Ahlat Malmüdürlüğü','Hizan Malmüdürlüğü','Mutki Malmüdürlüğü','Güroymak Malmüdürlüğü']
  },
  'Bolu': {
    ilceler: ['Dörtdivan','Gerede','Göynük','Kıbrıscık','Mengen','Merkez','Mudurnu','Seben','Yeniçağa'],
    vergidaireleri: ['Bolu VD','Gerede VD','Göynük Malmüdürlüğü','Kıbrıscık Malmüdürlüğü','Mengen Malmüdürlüğü','Mudurnu Malmüdürlüğü','Seben Malmüdürlüğü','Dörtdivan Malmüdürlüğü','Yeniçağa Malmüdürlüğü']
  },
  'Burdur': {
    ilceler: ['Ağlasun','Altınyayla','Bucak','Çavdır','Çeltikçi','Gölhisar','Karamanlı','Kemer','Merkez','Tefenni','Yeşilova'],
    vergidaireleri: ['Burdur VD','Bucak VD','Ağlasun Malmüdürlüğü','Gölhisar Malmüdürlüğü','Tefenni Malmüdürlüğü','Yeşilova Malmüdürlüğü','Karamanlı Malmüdürlüğü','Kemer Malmüdürlüğü','Altınyayla Malmüdürlüğü','Çavdır Malmüdürlüğü','Çeltikçi Malmüdürlüğü']
  },
  'Bursa': {
    ilceler: ['Büyükorhan','Gemlik','Gürsu','Harmancık','İnegöl','İznik','Karacabey','Keles','Merkez','Mudanya','Mustafakemalpaşa','Nilüfer','Orhaneli','Orhangazi','Osmangazi','Yenişehir','Yıldırım'],
    vergidaireleri: ['Bursa İhtisas VD','Osmangazi VD','Yıldırım VD','Çekirge VD','Setbaşı VD','Uludağ VD','Yeşil VD','Nilüfer VD','Ertuğrulgazi VD','Gökdere VD','Bursa Veraset ve Harçlar VD','Gemlik VD','İnegöl VD','Karacabey VD','Mustafakemalpaşa VD','Mudanya VD','Orhangazi VD','İznik VD','Yenişehir VD','Keles Malmüdürlüğü','Orhaneli Malmüdürlüğü','Harmancık Malmüdürlüğü','Büyükorhan Malmüdürlüğü']
  },
  'Çanakkale': {
    ilceler: ['Ayvacık','Bayramiç','Biga','Bozcaada','Çan','Eceabat','Ezine','Gelibolu','Gökçeada','Lapseki','Merkez','Yenice'],
    vergidaireleri: ['Çanakkale VD','Biga VD','Çan VD','Gelibolu VD','Ayvacık Malmüdürlüğü','Bayramiç Malmüdürlüğü','Bozcaada Malmüdürlüğü','Eceabat Malmüdürlüğü','Ezine Malmüdürlüğü','Gökçeada Malmüdürlüğü','Lapseki Malmüdürlüğü','Yenice Malmüdürlüğü']
  },
  'Çankırı': {
    ilceler: ['Atkaracalar','Bayramören','Çerkeş','Eldivan','Ilgaz','Kızılırmak','Korgun','Kurşunlu','Merkez','Orta','Şabanözü','Yapraklı'],
    vergidaireleri: ['Çankırı VD','Çerkeş Malmüdürlüğü','Eldivan Malmüdürlüğü','Ilgaz Malmüdürlüğü','Kurşunlu Malmüdürlüğü','Orta Malmüdürlüğü','Şabanözü Malmüdürlüğü','Yapraklı Malmüdürlüğü','Atkaracalar Malmüdürlüğü','Kızılırmak Malmüdürlüğü','Bayramören Malmüdürlüğü','Korgun Malmüdürlüğü']
  },
  'Çorum': {
    ilceler: ['Alaca','Bayat','Boğazkale','Dodurga','İskilip','Kargı','Laçin','Mecitözü','Merkez','Oğuzlar','Ortaköy','Osmancık','Sungurlu','Uğurludağ'],
    vergidaireleri: ['Çorum VD','Sungurlu VD','Alaca Malmüdürlüğü','Bayat Malmüdürlüğü','İskilip Malmüdürlüğü','Kargı Malmüdürlüğü','Mecitözü Malmüdürlüğü','Ortaköy Malmüdürlüğü','Osmancık Malmüdürlüğü','Boğazkale Malmüdürlüğü','Uğurludağ Malmüdürlüğü','Dodurga Malmüdürlüğü','Oğuzlar Malmüdürlüğü','Laçin Malmüdürlüğü']
  },
  'Denizli': {
    ilceler: ['Acıpayam','Babadağ','Baklan','Bekilli','Beyağaç','Bozkurt','Buldan','Çal','Çameli','Çardak','Çivril','Güney','Honaz','Kale','Merkez','Pamukkale','Sarayköy','Serinhisar','Tavas'],
    vergidaireleri: ['Saraylar VD','Çınar VD','Gökpınar VD','Denizli İhtisas VD','Pamukkale VD','Sarayköy VD','Acıpayam VD','Tavas VD','Buldan VD','Çal VD','Çivril VD','Çameli Malmüdürlüğü','Çardak Malmüdürlüğü','Güney Malmüdürlüğü','Kale Malmüdürlüğü','Babadağ Malmüdürlüğü','Bekilli Malmüdürlüğü','Honaz Malmüdürlüğü','Serinhisar Malmüdürlüğü','Baklan Malmüdürlüğü','Beyağaç Malmüdürlüğü','Bozkurt Malmüdürlüğü']
  },
  'Diyarbakır': {
    ilceler: ['Bağlar','Bismil','Çermik','Çınar','Çüngüş','Dicle','Eğil','Ergani','Hani','Hazro','Kayapınar','Kocaköy','Kulp','Lice','Silvan','Sur','Yenişehir'],
    vergidaireleri: ['Gökalp VD','Süleyman Nazif VD','Cahit Sıtkı Tarancı VD','Ergani VD','Bismil VD','Çermik Malmüdürlüğü','Çınar Malmüdürlüğü','Çüngüş Malmüdürlüğü','Dicle Malmüdürlüğü','Hani Malmüdürlüğü','Hazro Malmüdürlüğü','Kulp Malmüdürlüğü','Lice Malmüdürlüğü','Silvan Malmüdürlüğü','Eğil Malmüdürlüğü','Kocaköy Malmüdürlüğü']
  },
  'Edirne': {
    ilceler: ['Enez','Havsa','İpsala','Keşan','Lalapaşa','Meriç','Merkez','Süloğlu','Uzunköprü'],
    vergidaireleri: ['Arda VD','Kırkpınar VD','Keşan VD','Uzunköprü VD','Havsa VD','İpsala VD','Enez Malmüdürlüğü','Lalapaşa Malmüdürlüğü','Meriç Malmüdürlüğü','Süloğlu Malmüdürlüğü']
  },
  'Elazığ': {
    ilceler: ['Ağın','Alacakaya','Arıcak','Baskil','Karakoçan','Keban','Kovancılar','Maden','Merkez','Palu','Sivrice'],
    vergidaireleri: ['Harput VD','Hazar VD','Ağın Malmüdürlüğü','Baskil Malmüdürlüğü','Karakoçan Malmüdürlüğü','Keban Malmüdürlüğü','Maden Malmüdürlüğü','Palu Malmüdürlüğü','Sivrice Malmüdürlüğü','Arıcak Malmüdürlüğü','Kovancılar Malmüdürlüğü','Alacakaya Malmüdürlüğü']
  },
  'Erzincan': {
    ilceler: ['Çayırlı','İliç','Kemah','Kemaliye','Merkez','Otlukbeli','Refahiye','Tercan','Üzümlü'],
    vergidaireleri: ['Fevzipaşa VD','Çayırlı Malmüdürlüğü','İliç Malmüdürlüğü','Kemah Malmüdürlüğü','Kemaliye Malmüdürlüğü','Refahiye Malmüdürlüğü','Tercan Malmüdürlüğü','Üzümlü Malmüdürlüğü','Otlukbeli Malmüdürlüğü']
  },
  'Erzurum': {
    ilceler: ['Aşkale','Aziziye','Çat','Hınıs','Horasan','İspir','Karayazı','Köprüköy','Merkez','Narman','Oltu','Olur','Pasinler','Pazaryolu','Şenkaya','Tekman','Tortum','Uzundere'],
    vergidaireleri: ['Aziziye VD','Kazımkarabekir VD','Aşkale Malmüdürlüğü','Çat Malmüdürlüğü','Hınıs Malmüdürlüğü','Horasan Malmüdürlüğü','İspir Malmüdürlüğü','Karayazı Malmüdürlüğü','Narman Malmüdürlüğü','Oltu Malmüdürlüğü','Olur Malmüdürlüğü','Pasinler Malmüdürlüğü','Şenkaya Malmüdürlüğü','Tekman Malmüdürlüğü','Tortum Malmüdürlüğü','Karaçoban Malmüdürlüğü','Uzundere Malmüdürlüğü','Pazaryolu Malmüdürlüğü','Köprüköy Malmüdürlüğü']
  },
  'Eskişehir': {
    ilceler: ['Alpu','Beylikova','Çifteler','Günyüzü','Han','İnönü','Mahmudiye','Mihalgazi','Mihalıççık','Merkez','Odunpazarı','Sarıcakaya','Seyitgazi','Sivrihisar','Tepebaşı'],
    vergidaireleri: ['Eskişehir VD Başkanlığı','Mahmudiye Malmüdürlüğü','Mihalıççık Malmüdürlüğü','Sarıcakaya Malmüdürlüğü','Seyitgazi Malmüdürlüğü','Alpu Malmüdürlüğü','Beylikova Malmüdürlüğü','İnönü Malmüdürlüğü','Günyüzü Malmüdürlüğü','Han Malmüdürlüğü','Mihalgazi Malmüdürlüğü']
  },
  'Gaziantep': {
    ilceler: ['Araban','İslahiye','Karkamış','Merkez','Nizip','Nurdağı','Oğuzeli','Şahinbey','Şehitkamil','Yavuzeli'],
    vergidaireleri: ['Gaziantep İhtisas VD','Suburcu VD','Şehitkamil VD','Şahinbey VD','Gazikent VD','Kozanlı VD','Nizip VD','İslahiye VD','Araban Malmüdürlüğü','Oğuzeli Malmüdürlüğü','Yavuzeli Malmüdürlüğü','Karkamış Malmüdürlüğü','Nurdağı Malmüdürlüğü']
  },
  'Giresun': {
    ilceler: ['Alucra','Bulancak','Çamoluk','Çanakçı','Dereli','Doğankent','Espiye','Eynesil','Görele','Güce','Keşap','Merkez','Piraziz','Şebinkarahisar','Tirebolu','Yağlıdere'],
    vergidaireleri: ['Giresun VD','Bulancak VD','Alucra Malmüdürlüğü','Dereli Malmüdürlüğü','Espiye Malmüdürlüğü','Eynesil Malmüdürlüğü','Görele Malmüdürlüğü','Keşap Malmüdürlüğü','Şebinkarahisar Malmüdürlüğü','Tirebolu Malmüdürlüğü','Piraziz Malmüdürlüğü','Yağlıdere Malmüdürlüğü','Çanakçı Malmüdürlüğü','Güce Malmüdürlüğü','Çamoluk Malmüdürlüğü','Doğankent Malmüdürlüğü']
  },
  'Gümüşhane': {
    ilceler: ['Kelkit','Köse','Kürtün','Merkez','Şiran','Torul'],
    vergidaireleri: ['Gümüşhane VD','Kelkit Malmüdürlüğü','Şiran Malmüdürlüğü','Torul Malmüdürlüğü','Köse Malmüdürlüğü','Kürtün Malmüdürlüğü']
  },
  'Hakkari': {
    ilceler: ['Çukurca','Derecik','Merkez','Şemdinli','Yüksekova'],
    vergidaireleri: ['Hakkari VD','Yüksekova VD','Çukurca Malmüdürlüğü','Şemdinli Malmüdürlüğü','Derecik Malmüdürlüğü']
  },
  'Hatay': {
    ilceler: ['Altınözü','Antakya','Arsuz','Belen','Defne','Dörtyol','Erzin','Hassa','İskenderun','Kırıkhan','Kumlu','Merkez','Reyhanlı','Samandağ','Yayladağı'],
    vergidaireleri: ['23 Temmuz VD','Antakya VD','Şükrükanatlı VD','Sahil VD','Akdeniz VD','Asım Gündüz VD','Dörtyol VD','Kırıkhan VD','Reyhanlı VD','Samandağ VD','Altınözü Malmüdürlüğü','Hassa Malmüdürlüğü','Yayladağı Malmüdürlüğü','Erzin Malmüdürlüğü','Belen Malmüdürlüğü','Kumlu Malmüdürlüğü']
  },
  'Isparta': {
    ilceler: ['Aksu','Atabey','Eğirdir','Gelendost','Gönen','Keçiborlu','Merkez','Senirkent','Sütçüler','Şarkikaraağaç','Uluborlu','Yalvaç','Yenişarbademli'],
    vergidaireleri: ['Davraz VD','Kaymakkapı VD','Eğirdir VD','Yalvaç VD','Atabey Malmüdürlüğü','Gelendost Malmüdürlüğü','Keçiborlu Malmüdürlüğü','Senirkent Malmüdürlüğü','Sütçüler Malmüdürlüğü','Şarkikaraağaç Malmüdürlüğü','Uluborlu Malmüdürlüğü','Aksu Malmüdürlüğü','Gönen Malmüdürlüğü','Yenişarbademli Malmüdürlüğü']
  },
  'Mersin': {
    ilceler: ['Akdeniz','Anamur','Aydıncık','Bozyazı','Çamlıyayla','Erdemli','Gülnar','Mezitli','Mut','Silifke','Tarsus','Toroslar','Yenişehir'],
    vergidaireleri: ['İstiklal VD','Uray VD','Liman VD','Toros VD','Mersin İhtisas VD','Erdemli VD','Silifke VD','Anamur VD','Kızılmurat VD','Şehitkerim VD','Gülnar Malmüdürlüğü','Mut Malmüdürlüğü','Aydıncık Malmüdürlüğü','Bozyazı Malmüdürlüğü','Çamlıyayla Malmüdürlüğü']
  },
  'İstanbul': {
    ilceler: ['Adalar','Arnavutköy','Ataşehir','Avcılar','Bağcılar','Bahçelievler','Bakırköy','Başakşehir','Bayrampaşa','Beşiktaş','Beykoz','Beylikdüzü','Beyoğlu','Büyükçekmece','Çatalca','Çekmeköy','Esenler','Esenyurt','Eyüpsultan','Fatih','Gaziosmanpaşa','Güngören','Kadıköy','Kağıthane','Kartal','Küçükçekmece','Maltepe','Pendik','Sancaktepe','Sarıyer','Silivri','Sultanbeyli','Sultangazi','Şile','Şişli','Tuzla','Ümraniye','Üsküdar','Zeytinburnu'],
    vergidaireleri: ['Haliç İhtisas VD','Vatan İhtisas VD','Çamlıca İhtisas VD','Alemdağ VD','Yenikapı VD','Büyük Mükellefler VD Başkanlığı','Boğaziçi Kurumlar VD','Marmara Kurumlar VD','Davutpaşa VD','Esenler VD','Fatih VD','Küçükköy VD','Merter VD','Sultanbeyli VD','Anadolu Kurumlar VD','Tuzla VD','Kozyatağı VD','Maslak VD','Zincirlikuyu VD','İkitelli VD','Beşiktaş VD','Ümraniye VD','Yeditepe Veraset VD','Kasımpaşa VD','Erenköy VD','Hisar Veraset VD','Tuna VD','Rıhtım Veraset VD','Güngören VD','Kocasinan VD','Güneşli VD','Küçükyalı VD','Pendik VD','Bayrampaşa VD','Beyazıt VD','Beyoğlu VD','Gaziosmanpaşa VD','Göztepe VD','Hocapaşa VD','Kadıköy VD','Kocamustafapaşa VD','Mecidiyeköy VD','Şişli VD','Üsküdar VD','Halkalı VD','Kağıthane VD','Zeytinburnu VD','Beykoz VD','Sarıyer VD','Bakırköy VD','Kartal VD','Nakil Vasıtaları VD','Sarıgazi VD','Atışalanı VD','Yakacık VD','Yenibosna VD','Avcılar VD','Adalar VD','Küçükçekmece VD','Beylikdüzü VD','Esenyurt VD','Silivri VD','Büyükçekmece VD','Şile VD']
  },
  'İzmir': {
    ilceler: ['Aliağa','Balçova','Bayındır','Bayraklı','Bergama','Beydağ','Bornova','Buca','Çeşme','Çiğli','Dikili','Foça','Gaziemir','Güzelbahçe','Karabağlar','Karaburun','Karşıyaka','Kemalpaşa','Kiraz','Kınık','Konak','Menderes','Menemen','Narlıdere','Ödemiş','Selçuk','Seferihisar','Tire','Torbalı','Urla'],
    vergidaireleri: ['İzmir İhtisas VD','9 Eylül VD','Yamanlar VD','Belkahve VD','Karşıyaka VD','Kemeraltı VD','Konak VD','Kordon VD','Şirinyer VD','Kadifekale VD','Taşıtlar VD','Hasan Tahsin VD','Bornova VD','Balçova VD','Gaziemir VD','Ege VD','Çiğli VD','Çakabey İhtisas VD','Bayındır VD','Bergama VD','Menemen VD','Ödemiş VD','Tire VD','Torbalı VD','Kemalpaşa VD','Urla VD','Selçuk VD','Kınık VD','Kiraz VD','Çeşme VD','Aliağa VD','Menderes VD','Dikili Malmüdürlüğü','Foça Malmüdürlüğü','Karaburun Malmüdürlüğü','Seferihisar Malmüdürlüğü','Beydağ Malmüdürlüğü']
  },
  'Kars': {
    ilceler: ['Akyaka','Arpaçay','Digor','Kağızman','Merkez','Sarıkamış','Selim','Susuz'],
    vergidaireleri: ['Kars VD','Arpaçay Malmüdürlüğü','Digor Malmüdürlüğü','Kağızman Malmüdürlüğü','Sarıkamış Malmüdürlüğü','Selim Malmüdürlüğü','Susuz Malmüdürlüğü','Akyaka Malmüdürlüğü']
  },
  'Kastamonu': {
    ilceler: ['Abana','Ağlı','Araç','Azdavay','Bozkurt','Cide','Çatalzeytin','Daday','Devrekani','Doğanyurt','Hanönü','İhsangazi','İnebolu','Küre','Merkez','Pınarbaşı','Seydiler','Şenpazar','Taşköprü','Tosya'],
    vergidaireleri: ['Kastamonu VD','Tosya VD','Taşköprü VD','Araç Malmüdürlüğü','Azdavay Malmüdürlüğü','Bozkurt Malmüdürlüğü','Cide Malmüdürlüğü','Çatalzeytin Malmüdürlüğü','Daday Malmüdürlüğü','Devrekani Malmüdürlüğü','İnebolu Malmüdürlüğü','Küre Malmüdürlüğü','Abana Malmüdürlüğü','İhsangazi Malmüdürlüğü','Pınarbaşı Malmüdürlüğü','Şenpazar Malmüdürlüğü','Ağlı Malmüdürlüğü','Doğanyurt Malmüdürlüğü','Hanönü Malmüdürlüğü','Seydiler Malmüdürlüğü']
  },
  'Kayseri': {
    ilceler: ['Akkışla','Bünyan','Develi','Felahiye','Hacılar','İncesu','Kocasinan','Melikgazi','Özvatan','Pınarbaşı','Sarıoğlan','Sarız','Talas','Tomarza','Yahyalı','Yeşilhisar'],
    vergidaireleri: ['Kayseri İhtisas VD','Mimar Sinan VD','Erciyes VD','Kaleönü VD','Gevher Nesibe VD','Develi VD','Pınarbaşı VD','Bünyan VD','Felahiye Malmüdürlüğü','İncesu Malmüdürlüğü','Sarıoğlan Malmüdürlüğü','Sarız Malmüdürlüğü','Tomarza Malmüdürlüğü','Yahyalı Malmüdürlüğü','Yeşilhisar Malmüdürlüğü','Akkışla Malmüdürlüğü','Hacılar Malmüdürlüğü','Özvatan Malmüdürlüğü']
  },
  'Kırklareli': {
    ilceler: ['Babaeski','Demirköy','Kofçaz','Lüleburgaz','Merkez','Pehlivanköy','Pınarhisar','Vize'],
    vergidaireleri: ['Kırklareli VD','Lüleburgaz VD','Babaeski VD','Demirköy Malmüdürlüğü','Kofçaz Malmüdürlüğü','Pehlivanköy Malmüdürlüğü','Pınarhisar Malmüdürlüğü','Vize Malmüdürlüğü']
  },
  'Kırşehir': {
    ilceler: ['Akçakent','Akpınar','Boztepe','Çiçekdağı','Kaman','Merkez','Mucur'],
    vergidaireleri: ['Kırşehir VD','Kaman VD','Çiçekdağı Malmüdürlüğü','Mucur Malmüdürlüğü','Akpınar Malmüdürlüğü','Akçakent Malmüdürlüğü','Boztepe Malmüdürlüğü']
  },
  'Kocaeli': {
    ilceler: ['Başiskele','Çayırova','Darıca','Derince','Dilovası','Gebze','Gölcük','İzmit','Kandıra','Karamürsel','Kartepe','Körfez'],
    vergidaireleri: ['Kocaeli İhtisas VD','Tepecik VD','Alemdar VD','Gebze İhtisas VD','Acısu VD','Uluçınar VD','İlyasbey VD','Gölcük VD','Karamürsel VD','Körfez VD','Derince VD','Kandıra Malmüdürlüğü']
  },
  'Konya': {
    ilceler: ['Ahırlı','Akören','Akşehir','Altınekin','Beyşehir','Bozkır','Cihanbeyli','Çeltik','Çumra','Derbent','Derebucak','Doğanhisar','Emirgazi','Ereğli','Güneysınır','Hadim','Halkapınar','Hüyük','Ilgın','Kadınhanı','Karapınar','Karatay','Kulu','Meram','Sarayönü','Selçuklu','Seydişehir','Taşkent','Tuzlukçu','Yalıhüyük','Yunak'],
    vergidaireleri: ['Konya İhtisas VD','Selçuk VD','Mevlana VD','Meram VD','Alaaddin VD','Akşehir VD','Ereğli VD','Beyşehir VD','Cihanbeyli VD','Çumra VD','Seydişehir VD','Ilgın VD','Kulu VD','Karapınar VD','Bozkır Malmüdürlüğü','Doğanhisar Malmüdürlüğü','Hadim Malmüdürlüğü','Kadınhanı Malmüdürlüğü','Sarayönü Malmüdürlüğü','Yunak Malmüdürlüğü','Akören Malmüdürlüğü','Altınekin Malmüdürlüğü','Derebucak Malmüdürlüğü','Hüyük Malmüdürlüğü','Taşkent Malmüdürlüğü','Ahırlı Malmüdürlüğü','Çeltik Malmüdürlüğü','Derbent Malmüdürlüğü','Emirgazi Malmüdürlüğü','Güneysınır Malmüdürlüğü','Halkapınar Malmüdürlüğü','Tuzlukçu Malmüdürlüğü','Yalıhüyük Malmüdürlüğü']
  },
  'Kütahya': {
    ilceler: ['Altıntaş','Aslanapa','Çavdarhisar','Domaniç','Dumlupınar','Emet','Gediz','Hisarcık','Merkez','Pazarlar','Simav','Şaphane','Tavşanlı'],
    vergidaireleri: ['30 Ağustos VD','Çinili VD','Gediz VD','Simav VD','Tavşanlı VD','Emet VD','Altıntaş Malmüdürlüğü','Domaniç Malmüdürlüğü','Aslanapa Malmüdürlüğü','Dumlupınar Malmüdürlüğü','Hisarcık Malmüdürlüğü','Şaphane Malmüdürlüğü','Çavdarhisar Malmüdürlüğü','Pazarlar Malmüdürlüğü']
  },
  'Malatya': {
    ilceler: ['Akçadağ','Arapgir','Arguvan','Battalgazi','Darende','Doğanşehir','Doğanyol','Hekimhan','Kale','Kuluncak','Merkez','Pütürge','Yazıhan','Yeşilyurt'],
    vergidaireleri: ['Fırat VD','Beydağı VD','Akçadağ Malmüdürlüğü','Arapgir Malmüdürlüğü','Arguvan Malmüdürlüğü','Darende Malmüdürlüğü','Doğanşehir Malmüdürlüğü','Hekimhan Malmüdürlüğü','Pütürge Malmüdürlüğü','Yeşilyurt Malmüdürlüğü','Battalgazi Malmüdürlüğü','Doğanyol Malmüdürlüğü','Kale Malmüdürlüğü','Kuluncak Malmüdürlüğü','Yazıhan Malmüdürlüğü']
  },
  'Manisa': {
    ilceler: ['Ahmetli','Akhisar','Alaşehir','Demirci','Gölmarmara','Gördes','Kula','Köprübaşı','Kırkağaç','Merkez','Salihli','Sarıgöl','Saruhanlı','Selendi','Soma','Şehzadeler','Turgutlu','Yunusemre'],
    vergidaireleri: ['Manisa İhtisas VD','Şehit Cihan Güneş VD','Mesir VD','Akhisar VD','Alaşehir VD','Demirci VD','Kırkağaç VD','Salihli Adil Oral VD','Sarıgöl VD','Saruhanlı VD','Soma VD','Turgutlu VD','Gördes VD','Kula VD','Selendi Malmüdürlüğü','Ahmetli Malmüdürlüğü','Gölmarmara Malmüdürlüğü','Köprübaşı Malmüdürlüğü']
  },
  'Kahramanmaraş': {
    ilceler: ['Afşin','Andırın','Çağlayancerit','Ekinözü','Elbistan','Göksun','Merkez','Nurhak','Pazarcık','Türkoğlu'],
    vergidaireleri: ['Aslanbey VD','Aksu VD','Elbistan VD','Afşin VD','Pazarcık VD','Andırın Malmüdürlüğü','Göksun Malmüdürlüğü','Türkoğlu Malmüdürlüğü','Çağlayancerit Malmüdürlüğü','Ekinözü Malmüdürlüğü','Nurhak Malmüdürlüğü']
  },
  'Mardin': {
    ilceler: ['Artuklu','Dargeçit','Derik','Kızıltepe','Mazıdağı','Midyat','Merkez','Nusaybin','Ömerli','Savur','Yeşilli'],
    vergidaireleri: ['Mardin VD','Kızıltepe VD','Nusaybin VD','Derik Malmüdürlüğü','Mazıdağı Malmüdürlüğü','Midyat Malmüdürlüğü','Ömerli Malmüdürlüğü','Savur Malmüdürlüğü','Dargeçit Malmüdürlüğü','Yeşilli Malmüdürlüğü']
  },
  'Muğla': {
    ilceler: ['Bodrum','Dalaman','Datça','Fethiye','Kavlıdere','Kavaklıdere','Köyceğiz','Marmaris','Menteşe','Milas','Ortaca','Seydikemer','Ula','Yatağan'],
    vergidaireleri: ['Muğla VD','Bodrum VD','Fethiye VD','Köyceğiz VD','Milas VD','Marmaris VD','Yatağan VD','Datça Malmüdürlüğü','Ula Malmüdürlüğü','Dalaman Malmüdürlüğü','Ortaca Malmüdürlüğü','Kavaklıdere Malmüdürlüğü','Seydikemer Malmüdürlüğü']
  },
  'Muş': {
    ilceler: ['Bulanık','Hasköy','Korkut','Malazgirt','Merkez','Varto'],
    vergidaireleri: ['Muş VD','Bulanık Malmüdürlüğü','Malazgirt Malmüdürlüğü','Varto Malmüdürlüğü','Hasköy Malmüdürlüğü','Korkut Malmüdürlüğü']
  },
  'Nevşehir': {
    ilceler: ['Acıgöl','Avanos','Derinkuyu','Gülşehir','Hacıbektaş','Kozaklı','Merkez','Ürgüp'],
    vergidaireleri: ['Nevşehir VD','Avanos Malmüdürlüğü','Derinkuyu Malmüdürlüğü','Gülşehir Malmüdürlüğü','Hacıbektaş Malmüdürlüğü','Kozaklı Malmüdürlüğü','Ürgüp Malmüdürlüğü','Acıgöl Malmüdürlüğü']
  },
  'Niğde': {
    ilceler: ['Altunhisar','Bor','Çamardı','Çiftlik','Merkez','Ulukışla'],
    vergidaireleri: ['Niğde VD','Bor VD','Çamardı Malmüdürlüğü','Ulukışla Malmüdürlüğü','Altunhisar Malmüdürlüğü','Çiftlik Malmüdürlüğü']
  },
  'Ordu': {
    ilceler: ['Akkuş','Altınordu','Aybastı','Çamaş','Çatalpınar','Çaybaşı','Fatsa','Gölköy','Gülyalı','Gürgentepe','İkizce','Kabadüz','Kabataş','Korgan','Kumru','Mesudiye','Perşembe','Ulubey','Ünye'],
    vergidaireleri: ['Boztepe VD','Köprübaşı VD','Fatsa VD','Ünye VD','Akkuş Malmüdürlüğü','Aybastı Malmüdürlüğü','Gölköy Malmüdürlüğü','Korgan Malmüdürlüğü','Kumru Malmüdürlüğü','Mesudiye Malmüdürlüğü','Perşembe Malmüdürlüğü','Ulubey Malmüdürlüğü','Gülyalı Malmüdürlüğü','Gürgentepe Malmüdürlüğü','Çamaş Malmüdürlüğü','Çatalpınar Malmüdürlüğü','Çaybaşı Malmüdürlüğü','İkizce Malmüdürlüğü','Kabadüz Malmüdürlüğü','Kabataş Malmüdürlüğü']
  },
  'Rize': {
    ilceler: ['Ardeşen','Çamlıhemşin','Çayeli','Derepazarı','Fındıklı','Güneysu','Hemşin','İkizdere','İyidere','Kalkandere','Merkez','Pazar'],
    vergidaireleri: ['Kaçkar VD','Yeşilçay VD','Çayeli VD','Pazar VD','Ardeşen VD','Çamlıhemşin Malmüdürlüğü','Fındıklı Malmüdürlüğü','İkizdere Malmüdürlüğü','Kalkandere Malmüdürlüğü','Güneysu Malmüdürlüğü','Derepazarı Malmüdürlüğü','Hemşin Malmüdürlüğü','İyidere Malmüdürlüğü']
  },
  'Sakarya': {
    ilceler: ['Adapazarı','Akyazı','Arifiye','Erenler','Ferizli','Geyve','Hendek','Karapürçek','Karasu','Kaynarca','Kocaali','Pamukova','Sapanca','Serdivan','Söğütlü','Taraklı'],
    vergidaireleri: ['Sakarya İhtisas VD','Gümrükönü VD','Ali Fuat Cebesoy VD','Sapanca VD','Akyazı VD','Geyve VD','Hendek VD','Karasu VD','Kaynarca Malmüdürlüğü','Kocaali Malmüdürlüğü','Pamukova Malmüdürlüğü','Taraklı Malmüdürlüğü','Karapürçek Malmüdürlüğü']
  },
  'Samsun': {
    ilceler: ['Alaçam','Asarcık','Atakum','Ayvacık','Bafra','Canik','Çarşamba','Havza','İlkadım','Kavak','Ladik','Ondokuzmayıs','Salıpazarı','Tekkeköy','Terme','Vezirköprü','Yakakent'],
    vergidaireleri: ['19 Mayıs VD','Gaziler VD','Zafer VD','Bafra VD','Çarşamba VD','Terme VD','Havza VD','Alaçam Malmüdürlüğü','Kavak Malmüdürlüğü','Ladik Malmüdürlüğü','Vezirköprü Malmüdürlüğü','Asarcık Malmüdürlüğü','Ondokuz Mayıs Malmüdürlüğü','Salıpazarı Malmüdürlüğü','Tekkeköy Malmüdürlüğü','Ayvacık Malmüdürlüğü','Yakakent Malmüdürlüğü']
  },
  'Siirt': {
    ilceler: ['Baykan','Eruh','Kurtalan','Merkez','Pervari','Şirvan','Tillo'],
    vergidaireleri: ['Siirt VD','Baykan Malmüdürlüğü','Eruh Malmüdürlüğü','Kurtalan Malmüdürlüğü','Pervari Malmüdürlüğü','Şirvan Malmüdürlüğü','Tillo Malmüdürlüğü']
  },
  'Sinop': {
    ilceler: ['Ayancık','Boyabat','Dikmen','Durağan','Erfelek','Gerze','Merkez','Saraydüzü','Türkeli'],
    vergidaireleri: ['Sinop VD','Boyabat VD','Ayancık Malmüdürlüğü','Dikmen Malmüdürlüğü','Durağan Malmüdürlüğü','Erfelek Malmüdürlüğü','Gerze Malmüdürlüğü','Saraydüzü Malmüdürlüğü','Türkeli Malmüdürlüğü']
  },
  'Sivas': {
    ilceler: ['Akıncılar','Altınyayla','Divriği','Doğanşar','Gemerek','Gölova','Gürun','Hafik','İmranlı','Kangal','Koyulhisar','Merkez','Suşehri','Şarkışla','Ulaş','Yıldızeli','Zara'],
    vergidaireleri: ['Sivas VD','Şarkışla VD','Sivas Kurumlar VD','Divriği Malmüdürlüğü','Gemerek Malmüdürlüğü','Gürun Malmüdürlüğü','Hafik Malmüdürlüğü','İmranlı Malmüdürlüğü','Kangal Malmüdürlüğü','Koyulhisar Malmüdürlüğü','Suşehri Malmüdürlüğü','Ulaş Malmüdürlüğü','Yıldızeli Malmüdürlüğü','Zara Malmüdürlüğü','Akıncılar Malmüdürlüğü','Altınyayla Malmüdürlüğü','Doğanşar Malmüdürlüğü','Gölova Malmüdürlüğü']
  },
  'Tekirdağ': {
    ilceler: ['Çerkezköy','Çorlu','Ergene','Hayrabolu','Kapaklı','Malkara','Marmaraereğlisi','Muratlı','Saray','Süleymanpaşa','Şarköy'],
    vergidaireleri: ['Trakya VD','Çorlu VD','Çerkezköy VD','Hayrabolu VD','Malkara Malmüdürlüğü','Muratlı Malmüdürlüğü','Saray Malmüdürlüğü','Şarköy Malmüdürlüğü','Marmaraereğlisi Malmüdürlüğü']
  },
  'Tokat': {
    ilceler: ['Almus','Artova','Başçiftlik','Erbaa','Merkez','Niksar','Pazar','Reşadiye','Sulusaray','Turhal','Yeşilyurt','Zile'],
    vergidaireleri: ['Tokat VD','Turhal VD','Erbaa VD','Niksar VD','Zile VD','Almus Malmüdürlüğü','Artova Malmüdürlüğü','Pazar Malmüdürlüğü','Reşadiye Malmüdürlüğü','Sulusaray Malmüdürlüğü','Başçiftlik Malmüdürlüğü','Yeşilyurt Malmüdürlüğü']
  },
  'Trabzon': {
    ilceler: ['Akçaabat','Araklı','Arsin','Beşikdüzü','Çaykara','Dernekpazarı','Düzköy','Hayrat','Köprübaşı','Maçka','Merkez','Of','Ortahisar','Sürmene','Şalpazarı','Tonya','Vakfıkebir','Yomra'],
    vergidaireleri: ['Trabzon VD','Trabzon Kurumlar VD','Akçaabat VD','Of VD','Sürmene VD','Araklı VD','Vakfıkebir VD','Beşikdüzü Malmüdürlüğü','Çaykara Malmüdürlüğü','Dernekpazarı Malmüdürlüğü','Düzköy Malmüdürlüğü','Hayrat Malmüdürlüğü','Köprübaşı Malmüdürlüğü','Maçka Malmüdürlüğü','Şalpazarı Malmüdürlüğü','Tonya Malmüdürlüğü','Yomra Malmüdürlüğü','Arsin Malmüdürlüğü']
  },
  'Tunceli': {
    ilceler: ['Çemişgezek','Hozat','Mazgirt','Merkez','Nazimiye','Ovacık','Pertek','Pülümür'],
    vergidaireleri: ['Tunceli VD','Çemişgezek Malmüdürlüğü','Hozat Malmüdürlüğü','Mazgirt Malmüdürlüğü','Nazimiye Malmüdürlüğü','Ovacık Malmüdürlüğü','Pertek Malmüdürlüğü','Pülümür Malmüdürlüğü']
  },
  'Şanlıurfa': {
    ilceler: ['Akçakale','Birecik','Bozova','Ceylanpınar','Eyyübiye','Halfeti','Haliliye','Harran','Hilvan','Karaköprü','Merkez','Siverek','Suruç','Viranşehir'],
    vergidaireleri: ['Şanlıurfa VD','Şanlıurfa Kurumlar VD','Siverek VD','Birecik VD','Viranşehir VD','Suruç VD','Akçakale Malmüdürlüğü','Bozova Malmüdürlüğü','Ceylanpınar Malmüdürlüğü','Halfeti Malmüdürlüğü','Harran Malmüdürlüğü','Hilvan Malmüdürlüğü']
  },
  'Uşak': {
    ilceler: ['Banaz','Eşme','Karahallı','Merkez','Sivaslı','Ulubey'],
    vergidaireleri: ['Uşak VD','Eşme VD','Banaz Malmüdürlüğü','Karahallı Malmüdürlüğü','Sivaslı Malmüdürlüğü','Ulubey Malmüdürlüğü']
  },
  'Van': {
    ilceler: ['Bahçesaray','Başkale','Çaldıran','Çatak','Edremit','Erciş','Gevaş','Gürpınar','İpekyolu','Merkez','Muradiye','Özalp','Saray','Tuşba'],
    vergidaireleri: ['Van VD','Erciş VD','Başkale Malmüdürlüğü','Çaldıran Malmüdürlüğü','Çatak Malmüdürlüğü','Gevaş Malmüdürlüğü','Gürpınar Malmüdürlüğü','Muradiye Malmüdürlüğü','Özalp Malmüdürlüğü','Saray Malmüdürlüğü','Bahçesaray Malmüdürlüğü']
  },
  'Yozgat': {
    ilceler: ['Akdağmadeni','Aydıncık','Boğazlıyan','Çandır','Çayıralan','Çekerek','Kadışehri','Merkez','Saraykent','Sarıkaya','Sorgun','Şefaatli','Yenifakılı','Yerköy'],
    vergidaireleri: ['Yozgat VD','Sorgun VD','Akdağmadeni Malmüdürlüğü','Boğazlıyan Malmüdürlüğü','Çandır Malmüdürlüğü','Çayıralan Malmüdürlüğü','Çekerek Malmüdürlüğü','Kadışehri Malmüdürlüğü','Saraykent Malmüdürlüğü','Sarıkaya Malmüdürlüğü','Şefaatli Malmüdürlüğü','Yenifakılı Malmüdürlüğü','Yerköy Malmüdürlüğü','Aydıncık Malmüdürlüğü']
  },
  'Zonguldak': {
    ilceler: ['Alaplı','Çaycuma','Devrek','Ereğli','Gökçebey','Kilimli','Kozlu','Merkez'],
    vergidaireleri: ['Zonguldak VD','Ereğli VD','Karadeniz Ereğlisi VD','Çaycuma VD','Devrek Malmüdürlüğü','Alaplı Malmüdürlüğü','Gökçebey Malmüdürlüğü','Kilimli Malmüdürlüğü','Kozlu Malmüdürlüğü']
  },
  'Aksaray': {
    ilceler: ['Ağaçören','Eskil','Gülağaç','Güzelyurt','Merkez','Ortaköy','Sarıyahşi'],
    vergidaireleri: ['Aksaray VD','Eskil Malmüdürlüğü','Gülağaç Malmüdürlüğü','Güzelyurt Malmüdürlüğü','Ortaköy Malmüdürlüğü','Sarıyahşi Malmüdürlüğü','Ağaçören Malmüdürlüğü']
  },
  'Bayburt': {
    ilceler: ['Aydıntepe','Demirözü','Merkez'],
    vergidaireleri: ['Bayburt VD','Aydıntepe Malmüdürlüğü','Demirözü Malmüdürlüğü']
  },
  'Karaman': {
    ilceler: ['Ayrancı','Başyayla','Ermenek','Kazımkarabekir','Merkez','Sarıveliler'],
    vergidaireleri: ['Karaman VD','Ermenek VD','Ayrancı Malmüdürlüğü','Başyayla Malmüdürlüğü','Kazımkarabekir Malmüdürlüğü','Sarıveliler Malmüdürlüğü']
  },
  'Kırıkkale': {
    ilceler: ['Bahşılı','Balışeyh','Çelebi','Delice','Karakeçili','Keskin','Merkez','Sulakyurt','Yahşihan'],
    vergidaireleri: ['Kırıkkale VD','Keskin VD','Bahşılı Malmüdürlüğü','Balışeyh Malmüdürlüğü','Çelebi Malmüdürlüğü','Delice Malmüdürlüğü','Karakeçili Malmüdürlüğü','Sulakyurt Malmüdürlüğü','Yahşihan Malmüdürlüğü']
  },
  'Batman': {
    ilceler: ['Beşiri','Gercüş','Hasankeyf','Kozluk','Merkez','Sason'],
    vergidaireleri: ['Batman VD','Kozluk VD','Beşiri Malmüdürlüğü','Gercüş Malmüdürlüğü','Hasankeyf Malmüdürlüğü','Sason Malmüdürlüğü']
  },
  'Şırnak': {
    ilceler: ['Beytüşşebap','Cizre','Güçlükonak','İdil','Merkez','Silopi','Uludere'],
    vergidaireleri: ['Şırnak VD','Cizre VD','Silopi VD','Beytüşşebap Malmüdürlüğü','Güçlükonak Malmüdürlüğü','İdil Malmüdürlüğü','Uludere Malmüdürlüğü']
  },
  'Bartın': {
    ilceler: ['Amasra','Kurucaşile','Merkez','Ulus'],
    vergidaireleri: ['Bartın VD','Amasra Malmüdürlüğü','Kurucaşile Malmüdürlüğü','Ulus Malmüdürlüğü']
  },
  'Ardahan': {
    ilceler: ['Çıldır','Damal','Göle','Hanak','Merkez','Posof'],
    vergidaireleri: ['Ardahan VD','Göle Malmüdürlüğü','Çıldır Malmüdürlüğü','Damal Malmüdürlüğü','Hanak Malmüdürlüğü','Posof Malmüdürlüğü']
  },
  'Iğdır': {
    ilceler: ['Aralık','Karakoyunlu','Merkez','Tuzluca'],
    vergidaireleri: ['Iğdır VD','Aralık Malmüdürlüğü','Karakoyunlu Malmüdürlüğü','Tuzluca Malmüdürlüğü']
  },
  'Yalova': {
    ilceler: ['Altınova','Armutlu','Çınarcık','Çiftlikköy','Merkez','Termal'],
    vergidaireleri: ['Yalova VD','Altınova Malmüdürlüğü','Armutlu Malmüdürlüğü','Çınarcık Malmüdürlüğü','Çiftlikköy Malmüdürlüğü','Termal Malmüdürlüğü']
  },
  'Karabük': {
    ilceler: ['Eflani','Eskipazar','Merkez','Ovacık','Safranbolu','Yenice'],
    vergidaireleri: ['Karabük VD','Safranbolu VD','Eflani Malmüdürlüğü','Eskipazar Malmüdürlüğü','Ovacık Malmüdürlüğü','Yenice Malmüdürlüğü']
  },
  'Kilis': {
    ilceler: ['Elbeyli','Merkez','Musabeyli','Polateli'],
    vergidaireleri: ['Kilis VD','Elbeyli Malmüdürlüğü','Musabeyli Malmüdürlüğü','Polateli Malmüdürlüğü']
  },
  'Osmaniye': {
    ilceler: ['Bahçe','Düziçi','Hasanbeyli','Kadirli','Merkez','Sumbas','Toprakkale'],
    vergidaireleri: ['Osmaniye VD','Kadirli VD','Bahçe Malmüdürlüğü','Düziçi Malmüdürlüğü','Hasanbeyli Malmüdürlüğü','Sumbas Malmüdürlüğü','Toprakkale Malmüdürlüğü']
  },
  'Düzce': {
    ilceler: ['Akçakoca','Cumayeri','Çilimli','Gölyaka','Gümüşova','Kaynaşlı','Merkez','Yığılca'],
    vergidaireleri: ['Düzce VD','Akçakoca VD','Cumayeri Malmüdürlüğü','Çilimli Malmüdürlüğü','Gölyaka Malmüdürlüğü','Gümüşova Malmüdürlüğü','Kaynaşlı Malmüdürlüğü','Yığılca Malmüdürlüğü']
  }
};

// cityChanged fonksiyonunu güncelle
function cityChanged(cityId, districtId, taxId) {
  const city = document.getElementById(cityId).value;
  const distSel = document.getElementById(districtId);
  const taxSel = document.getElementById(taxId);

  distSel.innerHTML = '<option value="">İlçe seçin...</option>';
  if (taxSel) taxSel.innerHTML = '<option value="">Vergi dairesi seçin...</option>';

  if (!city || !IL_DATA[city]) return;

  const data = IL_DATA[city];

  // İlçeler
  data.ilceler.sort().forEach(i => {
    const o = document.createElement('option');
    o.value = i; o.textContent = i;
    distSel.appendChild(o);
  });

  // Vergi daireleri
  if (taxSel) {
    data.vergidaireleri.forEach(vd => {
      const o = document.createElement('option');
      o.value = vd; o.textContent = vd;
      taxSel.appendChild(o);
    });
  }
}
