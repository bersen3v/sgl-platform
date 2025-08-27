import { baseUrl } from "@/shared/network/config/baseUrl";
import { GameEvent } from "../../../model/gameEvent";
import fetchStringFromUrl from "@/shared/network/methods/fetchStringFromUrl";

export default async function getAllEvents(): Promise<GameEvent[]> {
  const path = baseUrl + "/getAllEvents";

  const data = await fetchStringFromUrl(path);

  // const data = {
  //   result: [
  //     {
  //       id: 1,
  //       previewPhoto:
  //         "https://clan.fastly.steamstatic.com/images/3703047/e5883742c6230cb46e5ee6858256fc82b8ea7adf.jpg",
  //       name: { ru: "Дота event", en: "Dota event", kk: "Dota event" },
  //       discipline: "Dota",
  //       manager: "Moscow Cybersport Community",
  //       description: {
  //         ru: "Турнир по киберспорту - это соревнование между игровыми командами или отдельными участниками в компьютерных играх. В киберспорте участники соревнуются в различных жанрах игр, таких как стратегии, шутеры, файтинги, спортивные симуляторы и другие. Турниры в киберспорте могут быть организованы как онлайн-мероприятия, так и офлайн-ивенты с массовыми зрителями. Организаторы турниров по киберспорту устанавливают правила и формат соревнований, определяют призовой фонд и приглашают профессиональные команды или игроков для участия. В турнирах могут участвовать как профессиональные киберспортсмены, так и любители, желающие продемонстрировать свои навыки в играх. Турниры по киберспорту привлекают внимание широкой аудитории зрителей и фанатов, которые следят за ходом игры через трансляции в реальном времени. Популярные турниры по киберспорту часто имеют большой призовой фонд и привлекают тысячи зрителей как офлайн, так и онлайн. Участие в турнирах по киберспорту не только способствует развитию навыков и координации игроков, но также способствует формированию дружеских и профессиональных отношений между участниками, а также увлекательному отдыху для зрителей и фанатов киберспорта.",
  //         en: "The esports tournament is a competition between gaming teams or individual participants in computer games. In esports, participants compete in various game genres, such as strategy games, shooters, fighting games, sports simulators, and others. Esports tournaments can be organized as online events or offline events with a large audience. Organizers of esports tournaments establish rules and competition formats, determine the prize pool, and invite professional teams or players to participate. Tournaments can include both professional esports athletes and enthusiasts who want to showcase their skills in games. Esports tournaments attract the attention of a wide audience of viewers and fans who follow the game progress through real-time broadcasts. Popular esports tournaments often have significant prize pools and attract thousands of spectators both offline and online. Participation in esports tournaments not only contributes to the development of players' skills and coordination but also fosters friendly and professional relationships among participants, as well as providing exciting entertainment for viewers and esports fans.",
  //         kk: "E-sports турнирі - бұл компьютерлік ойындағы ойыншылардың немесе жекешелі участкеншілердің арасындағы жарыс. E-sports-тағы ойыншылар көп шеңберлі ойындармен, мәселен, стратегиялық ойындар, шутерлер, файтингтер, спорттық симуляторлар және басқаларда жарыстайтындар. E-sports турнирлері онлайн-есептер немесе көптеген көз жұмысшыларының болуғасымен оралатын шектеулер. E-sports турнирлерінің органызаторлары шарттар мен жарыстау үрдістерін қалыптастыру, жеңімпаз бағдарламасын белгілеу, есепие Құрамайтын профессионалды тобы немесе участкеншілерді қатысуға шақырады. Турнирдерде профессионалды E-sports спортшылары да, игралар бойынша біліктерін көрсету қалғанардың ойыншыларға қатысуды талап етеді. E-sports турнирлері көз жұмысшылар және тараларды ойынның дамуыны жаңауға бағдарлады және өтініштер арқылы көре алады. Танымал E-sports турнирлері қолма-көл талапсыз жейтинін ұсынады және көптеген көз қойатын және көз жұмысшыларды жудырарға белгілі садаға ие. E-sports турнирлеріне қатысу ойыншылардың дағдылары мен бірлігі жетілгендігіне көмек көрсетеді және участкеншілер арасындағы досымашылық және профессионалды негіздерді дамытуға көмек көрсетеді, сондай-а көз жұмысшылар және есіптеушілерге қызықты көршілерді ұсынады.",
  //       },
  //       place: {
  //         ru: "Москва, Россия",
  //         en: "Moscow, Russia",
  //         kk: "Moscow, Russia",
  //       },
  //       developer: "Valve",
  //       startTime: 1745398395,
  //       endTime: 1745398395,
  //       prize: 1234,
  //     },
  //     {
  //       id: 2,
  //       previewPhoto:
  //         "https://clan.fastly.steamstatic.com/images/3703047/e5883742c6230cb46e5ee6858256fc82b8ea7adf.jpg",
  //       name: { ru: "Дота event", en: "Dota event", kk: "Dota event" },
  //       discipline: "Dota",
  //       manager: "Moscow Cybersport Community",
  //       description: {
  //         ru: "Турнир по киберспорту - это соревнование между игровыми командами или отдельными участниками в компьютерных играх. В киберспорте участники соревнуются в различных жанрах игр, таких как стратегии, шутеры, файтинги, спортивные симуляторы и другие. Турниры в киберспорте могут быть организованы как онлайн-мероприятия, так и офлайн-ивенты с массовыми зрителями. Организаторы турниров по киберспорту устанавливают правила и формат соревнований, определяют призовой фонд и приглашают профессиональные команды или игроков для участия. В турнирах могут участвовать как профессиональные киберспортсмены, так и любители, желающие продемонстрировать свои навыки в играх. Турниры по киберспорту привлекают внимание широкой аудитории зрителей и фанатов, которые следят за ходом игры через трансляции в реальном времени. Популярные турниры по киберспорту часто имеют большой призовой фонд и привлекают тысячи зрителей как офлайн, так и онлайн. Участие в турнирах по киберспорту не только способствует развитию навыков и координации игроков, но также способствует формированию дружеских и профессиональных отношений между участниками, а также увлекательному отдыху для зрителей и фанатов киберспорта.",
  //         en: "The esports tournament is a competition between gaming teams or individual participants in computer games. In esports, participants compete in various game genres, such as strategy games, shooters, fighting games, sports simulators, and others. Esports tournaments can be organized as online events or offline events with a large audience. Organizers of esports tournaments establish rules and competition formats, determine the prize pool, and invite professional teams or players to participate. Tournaments can include both professional esports athletes and enthusiasts who want to showcase their skills in games. Esports tournaments attract the attention of a wide audience of viewers and fans who follow the game progress through real-time broadcasts. Popular esports tournaments often have significant prize pools and attract thousands of spectators both offline and online. Participation in esports tournaments not only contributes to the development of players' skills and coordination but also fosters friendly and professional relationships among participants, as well as providing exciting entertainment for viewers and esports fans.",
  //         kk: "E-sports турнирі - бұл компьютерлік ойындағы ойыншылардың немесе жекешелі участкеншілердің арасындағы жарыс. E-sports-тағы ойыншылар көп шеңберлі ойындармен, мәселен, стратегиялық ойындар, шутерлер, файтингтер, спорттық симуляторлар және басқаларда жарыстайтындар. E-sports турнирлері онлайн-есептер немесе көптеген көз жұмысшыларының болуғасымен оралатын шектеулер. E-sports турнирлерінің органызаторлары шарттар мен жарыстау үрдістерін қалыптастыру, жеңімпаз бағдарламасын белгілеу, есепие Құрамайтын профессионалды тобы немесе участкеншілерді қатысуға шақырады. Турнирдерде профессионалды E-sports спортшылары да, игралар бойынша біліктерін көрсету қалғанардың ойыншыларға қатысуды талап етеді. E-sports турнирлері көз жұмысшылар және тараларды ойынның дамуыны жаңауға бағдарлады және өтініштер арқылы көре алады. Танымал E-sports турнирлері қолма-көл талапсыз жейтинін ұсынады және көптеген көз қойатын және көз жұмысшыларды жудырарға белгілі садаға ие. E-sports турнирлеріне қатысу ойыншылардың дағдылары мен бірлігі жетілгендігіне көмек көрсетеді және участкеншілер арасындағы досымашылық және профессионалды негіздерді дамытуға көмек көрсетеді, сондай-а көз жұмысшылар және есіптеушілерге қызықты көршілерді ұсынады.",
  //       },
  //       place: {
  //         ru: "Москва, Россия",
  //         en: "Moscow, Russia",
  //         kk: "Moscow, Russia",
  //       },
  //       developer: "Valve",
  //       startTime: 1745398395,
  //       endTime: 1745398395,
  //       prize: 1234,
  //     },
  //   ],
  // };

  return data as GameEvent[];
}
