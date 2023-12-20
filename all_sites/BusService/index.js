let BusesMap = new Map();
BusesMap.set("Unsetted", [
    'Не выбран (Имя)', 'Не выбран (Тип)', 'Не выбран (Ср. Ожид.)',
    'Не выбран (Нач. Поз.)', 'Не выбран (Кон. Поз.)',
    'Не выбран (Нач. Вр.)', 'Не выбран (Кон. Вр.)',
    'Не выбран (YM)',
    'Не выбран (GM)',
    'Не выбран (2M)',
    "busicon.png",
])
BusesMap.set("5", [
    '5', 'Автобус', '10 минут',
    'Парк Северный лес', 'Институт МЧС',
    '6:00', '23:02',
    'https://yandex.ru/maps/193/voronezh/routes/bus_5/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437353932266c6c3d33392e31363432313125324335312e363732363534266e616d653d3526723d3436303826747970653d627573/?azimuth=5.445922752855954&ll=39.151463%2C51.710623&tab=stops&z=16',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%B0%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%205/route/4363467729403911?m=39.196449%2C51.679261%2F13.15',
    "bus5.png",
])
BusesMap.set("9", [
    '9', 'Автобус', '10 минут',
    'Кинотеатр Спартак', 'Кинотеатр Спартак',
    '6:00', '23:00',
    'https://yandex.ru/maps/193/voronezh/routes/bus_9ks/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437353737266c6c3d33392e31393235363525324335312e373030383430266e616d653d3925443025424125443125383126723d3433393426747970653d627573/?azimuth=5.445922752855954&ll=39.205971%2C51.702199&tab=stops&z=13.1',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/route/4363467729403936?m=39.206027%2C51.702216%2F13.1',
    "bus9.png",
])
BusesMap.set("27", [
    '27', 'Автобус', '10 минут',
    'Улица Перхоровича', 'Улица Перхоровича',
    '5:56', '22:30',
    'https://yandex.ru/maps/193/voronezh/routes/bus_27/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437373237266c6c3d33392e31333833333725324335312e363836333532266e616d653d323726723d3432353326747970653d627573/?azimuth=5.445922752855954&ll=39.154124%2C51.682764&tab=stops&z=13.34',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%90%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%2027/route/4363468227712299?m=39.206027%2C51.702216%2F13.1',
    "bus27.png",
])
BusesMap.set("32", [
    '32', 'Автобус', '10 минут',
    'Тверская улица', 'Улица Перхоровича',
    '6:00', '22:30',
    'https://yandex.ru/maps/193/voronezh/routes/bus_32/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d34303637333634313235266c6c3d33392e31393539303725324335312e363632383633266e616d653d333226723d3637323926747970653d627573/?azimuth=5.445922752855954&ll=39.196031%2C51.669135&tab=stops&z=13.32',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%90%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%2032/route/4363468017788299?m=39.197549%2C51.673459%2F13.1',
    "bus32.png",
])
BusesMap.set("35", [
    '35', 'Автобус', '10 минут',
    'Филиал Стоматологической поликлиники № 6', 'ВАСО',
    '6:00', '23:02',
    'https://yandex.ru/maps/193/voronezh/routes/bus_35/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437353339266c6c3d33392e31383636343825324335312e363631333339266e616d653d333526723d3530393626747970653d627573/?azimuth=5.445922752855954&ll=39.186917%2C51.666642&tab=stops&z=13.31',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%BA%D0%B0%2035/route/4363467729404015?m=39.24656%2C51.636785%2F16',
    "bus35.png",
])
BusesMap.set("49", [
    '49', 'Автобус', '10 минут',
    'Студенческий городок ВГТУ', 'Завод ГОО',
    '5:50', '23:00',
    'https://yandex.ru/maps/193/voronezh/routes/bus_49/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437363630266c6c3d33392e32313331343925324335312e363735333735266e616d653d343926723d3931373926747970653d627573/?azimuth=5.445922752855954&ll=39.214275%2C51.679713&tab=stops&z=12.15',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%B0%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%2049/route/4363467729403988?m=39.24656%2C51.636785%2F16',
    "bus49.png",
])
BusesMap.set("61", [
    '61', 'Автобус', '10 минут',
    'Подклетное', 'Подклетное',
    '6:00', '22:30',
    'https://yandex.ru/maps/193/voronezh/routes/bus_61/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437353939266c6c3d33392e31333631393625324335312e363835323933266e616d653d363126723d3439363226747970653d627573/?azimuth=5.445922752855954&ll=39.169462%2C51.666046&tab=stops&z=12.72',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%B0%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%2061/route/4363467976787671?m=39.24656%2C51.636785%2F16',
    "bus61.png",
])
BusesMap.set("64", [
    '64', 'Автобус', '10 минут',
    'Воронежский государственный университет', 'Сити-парк Град - Центральный вход',
    '6:05', '21:20',
    'https://yandex.ru/maps/193/voronezh/routes/bus_64/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437363033266c6c3d33392e32303238353325324335312e373237333131266e616d653d363426723d3737363926747970653d627573/?azimuth=5.445922752855954&ll=39.192136%2C51.723396&tab=stops&z=12.44',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%B0%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%2064/route/4363467729404064?m=39.24656%2C51.636785%2F16',
    "bus64.png",
])
BusesMap.set("90", [
    '90', 'Автобус', '10 минут',
    'Улица Антонова-Овсеенко', 'Грузинская улица',
    '5:38', '23:00',
    'https://yandex.ru/maps/193/voronezh/routes/bus_90/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437353634266c6c3d33392e32353937363925324335312e373237323635266e616d653d393026723d3837313026747970653d627573/?azimuth=5.445922752855954&ll=39.259559%2C51.703937&tab=stops&z=12.97',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%B0%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%2090/route/4363467729403920?m=39.24656%2C51.636785%2F16',
    "bus90.png",
])
BusesMap.set("120a", [
    '120а', 'Автобус', '10 минут',
    'Вокзал Воронеж-1', 'Аэропорт',
    '6:30', '20:10',
    'https://yandex.ru/maps/10672/voronezh-oblast/routes/bus_120a/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437363137266c6c3d33392e32313431333525324335312e373337313536266e616d653d31323025443025423026723d3834303426747970653d627573/?azimuth=5.445922752855954&ll=39.202123%2C51.737041&tab=stops&z=12.24',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%B0%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%20120%D0%B0/route/4363467771522409?m=39.24656%2C51.636785%2F16',
    "bus120a.png",
])
BusesMap.set("366a", [
    '366а', 'Автобус', '10 минут',
    'Новоподклетное', 'Воронежский государственный университет',
    '5:50', '19:50',
    'https://yandex.ru/maps/157854/novopodkletnoye/routes/bus_366a/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437363930266c6c3d33392e32303238353325324335312e373237333131266e616d653d33363625443025423026723d3737363926747970653d627573/?azimuth=5.445922752855954&ll=39.163665%2C51.725715&tab=stops&z=12.41',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%B0%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%20366%D0%B0/route/4363467729404096?m=39.24656%2C51.636785%2F16',
    "bus366a.png",
])
BusesMap.set("366v", [
    '366в', 'Автобус', '10 минут',
    'Воронежский государственный университет', 'Новоживотинное',
    '5:15', '18:50',
    'https://yandex.ru/maps/193/voronezh/routes/bus_366v/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437363931266c6c3d33392e31383930343525324335312e373732363839266e616d653d33363625443025423226723d313238363826747970653d627573/?azimuth=5.445922752855954&ll=39.172389%2C51.772930&tab=stops&z=11.63',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%B0%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%20366%D0%B2/route/4363467773445291?m=39.24656%2C51.636785%2F16',
    "bus366v.png",
])
BusesMap.set("25", [
    '25', 'Маршрутка', '10 минут',
    'ВАСО', 'Улица Антонова-Овсеенко',
    '6:30', '20:30',
    'https://yandex.ru/maps/193/voronezh/routes/minibus_25/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437363238266c6c3d33392e31393332373725324335312e363731373238266e616d653d323526723d3534373526747970653d6d696e69627573/?azimuth=5.445922752855954&ll=39.191996%2C51.670879&tab=stops&z=13.22',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%BA%D0%B0%2025/route/4363467729403949?m=39.24656%2C51.636785%2F16',
    "bus25.png",
])
BusesMap.set("37", [
    '37', 'Маршрутка', '10 минут',
    'Магазин Лидер', 'Улица Перхоровича',
    '5:30', '21:50',
    'https://yandex.ru/maps/193/voronezh/routes/minibus_37/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437363933266c6c3d33392e31363332303325324335312e363738343832266e616d653d333726723d3338383326747970653d6d696e69627573/?azimuth=5.445922752855954&ll=39.151394%2C51.678242&tab=stops&z=13.38',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%BA%D0%B0%2037/route/4363467729403967?m=39.24656%2C51.636785%2F16',
    "bus37.png",
])
BusesMap.set("40", [
    '40', 'Маршрутка', '10 минут',
    'Улица Перхоровича', 'Перинатальный центр',
    '6:00', '22:45',
    'https://yandex.ru/maps/193/voronezh/routes/minibus_40/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437363637266c6c3d33392e31333934383425324335312e363939323939266e616d653d343026723d3535343226747970653d6d696e69627573/?azimuth=5.445922752855954&ll=39.154655%2C51.695649&tab=stops&z=12.89',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%BA%D0%B0%2040/route/4363467930400450?m=39.24656%2C51.636785%2F16',
    "bus40.png",
])
BusesMap.set("97", [
    '97', 'Маршрутка', '10 минут',
    'ВАСО', 'Улица Антонова-Овсеенко',
    '6:10', '22:10',
    'https://yandex.ru/maps/193/voronezh/routes/minibus_97/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437363935266c6c3d33392e31393332373725324335312e363731373238266e616d653d393726723d3534373526747970653d6d696e69627573/?azimuth=5.445922752855954&ll=39.193376%2C51.673187&tab=stops&z=13.17',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%BA%D0%B0%2097/route/4363467729403968?m=39.24656%2C51.636785%2F16',
    "bus97.png",
])
BusesMap.set("7", [
    '7', 'Троллейбус', '10 минут',
    'Воронежский государственный университет', 'Воронежский государственный университет',
    '7:11', '21:01',
    'https://yandex.ru/maps/193/voronezh/routes/trolleybus_7/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d32343439373437373035266c6c3d33392e31393436393825324335312e363830323138266e616d653d3726723d3236333026747970653d74726f6c6c6579627573/?azimuth=5.445922752855954&ll=39.193336%2C51.680182&tab=stops&z=13.95',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D1%82%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D0%B9%D0%B1%D1%83%D1%81%207/route/4363467930450260?m=39.24656%2C51.636785%2F16',
    "bus7.png",
])
BusesMap.set("99", [
    '99', 'Троллейбус', '10 минут',
    'Воронежский государственный университет', 'Универсам Молодёжный',
    '6:00', '20:30',
    'https://yandex.ru/maps/193/voronezh/routes/trolleybus_99/796d617073626d313a2f2f7472616e7369742f6c696e653f69643d34343338393038393530266c6c3d33392e31373836363725324335312e363834323638266e616d653d393926723d3334393926747970653d74726f6c6c6579627573/?azimuth=5.445922752855954&ll=39.176547%2C51.685199&tab=stops&z=13.69',
    'Не выбран (GM)',
    'https://2gis.ru/voronezh/search/%D1%82%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D0%B9%D0%B1%D1%83%D1%81%2099/route/4363468017806241?m=39.24656%2C51.636785%2F16',
    "bus99.png",
])
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
  // main function
  function scrollToY(scrollTargetY, speed, easing) {
      // scrollTargetY: the target scrollY property of the window
      // speed: time in pixels per second
      // easing: easing equation to use
      var scrollY = window.scrollY || document.documentElement.scrollTop,
          scrollTargetY = scrollTargetY || 0,
          speed = speed || 2000,
          easing = easing || 'easeOutSine',
          currentTime = 0;
      // min time .1, max time .8 seconds
      var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
      // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
      var easingEquations = {
              easeOutSine: function (pos) {
                  return Math.sin(pos * (Math.PI / 2));
              },
              easeInOutSine: function (pos) {
                  return (-0.5 * (Math.cos(Math.PI * pos) - 1));
              },
              easeInOutQuint: function (pos) {
                  if ((pos /= 0.5) < 1) {
                      return 0.5 * Math.pow(pos, 5);
                  }
                  return 0.5 * (Math.pow((pos - 2), 5) + 2);
              }
          };
      // add animation loop
      function tick() {
          currentTime += 1 / 60;
          var p = currentTime / time;
          var t = easingEquations[easing](p);
          if (p < 1) {
              requestAnimFrame(tick);
              window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
          } else {
              console.log('scroll done');
              window.scrollTo(0, scrollTargetY);
          }
      }
      // call it once to get started
      tick();
  }
  // scroll it!
function BusSearch(Name)
{
    document.getElementById("BusName").innerText = "Номер автобуса: " + BusesMap.get(Name)[0];
    document.getElementById("BusType").innerText = "Тип: " + BusesMap.get(Name)[1];
    document.getElementById("BusTime").innerText = "Время ожидания: " + BusesMap.get(Name)[2];
    document.getElementById("StartPos").innerText = "Нач. ост.: " + BusesMap.get(Name)[3];
    document.getElementById("EndPos").innerText = "Кон. ост.: " + BusesMap.get(Name)[4];
    document.getElementById("StartTime").innerText = "Начала поездок: " + BusesMap.get(Name)[5];
    document.getElementById("EndTime").innerText = "Конец поездок: " + BusesMap.get(Name)[6];
    document.getElementById("YandexURL").href = BusesMap.get(Name)[7];
    document.getElementById("2GISURL").href = BusesMap.get(Name)[9];
    document.getElementById("busmapimage").style.backgroundImage = "url('Images/" + BusesMap.get(Name)[10] + "')";
    scrollToY(0, 1500, 'easeOutSine');
}
BusSearch("Unsetted");
/*
document.getElementById("StartTime").innerText = "Нач. ост.: " + BusesMap.get(Name)[5];
    document.getElementById("EndTime").innerText = "Кон. ост.: " + BusesMa
*/