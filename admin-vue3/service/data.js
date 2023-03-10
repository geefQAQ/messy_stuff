const teams = [
  {
    "_id" : "63ea90b05b2666528b5b5216",
    "logo" : "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
    "venue" : "大通中心",
    "cnName" : "勇士",
    "coach" : "史蒂夫-科尔",
    "city" : "美国加州旧金山",
    "teamId" : "1"
  },
  {
    "_id" : "63ea91b35b2666528b5b521f",
    "logo" : "https://mat1.gtimg.com/sports/nba/logo/1602/2.png",
    "venue" : "TD北岸花园球馆",
    "cnName" : "凯尔特人",
    "coach" : "乔-马祖拉",
    "city" : "马萨诸塞州波士顿",
    "teamId" : "2"
  },
  {
    "_id" : "63ea92355b2666528b5b5226",
    "city" : "科罗拉多州丹佛",
    "coach" : "迈克尔-马龙",
    "cnName" : "掘金",
    "venue" : "科罗拉多州丹佛",
    "logo" : "http://mat1.gtimg.com/sports/nba/logo/1602/20187.png",
    "teamId" : "3"
  }
]

const players = [
  {
    "cnName": "斯蒂芬-库里",
    "cnAlias": "库里",
    "enName": "Stephen Curry",
    "height": "188.0",
    "weight": "83.9",
    "years": "13",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/201939.png",
    "position": "后卫",
    "jerseyNum": "30",
  },
  {
    "cnName": "克雷-汤普森",
    "cnAlias": "汤普森",
    "enName": "Klay Thompson",
    "height": "198.1",
    "weight": "99.8",
    "years": "9",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/202691.png",
    "position": "后卫",
    "jerseyNum": "11",
  },
  {
    "cnName": "乔丹-普尔",
    "cnAlias": "普尔",
    "enName": "Jordan Poole",
    "height": "193.0",
    "weight": "88.0",
    "years": "3",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/1629673.png",
    "position": "后卫",
    "jerseyNum": "3",
  },
  {
    "cnName": "安德鲁-维金斯",
    "cnAlias": "维金斯",
    "enName": "Andrew Wiggins",
    "height": "200.7",
    "weight": "89.3",
    "years": "8",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/203952.png",
    "position": "前锋",
    "jerseyNum": "22",
  },
  {
    "cnName": "丹特-迪文琴佐",
    "cnAlias": "迪文琴佐",
    "enName": "Donte DiVincenzo",
    "height": "193.0",
    "weight": "92.1",
    "years": "4",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/1628978.png",
    "position": "后卫",
    "jerseyNum": "0",
  },
  {
    "cnName": "库明加",
    "cnAlias": "库明加",
    "enName": "Jonathan Kuminga",
    "height": "200.7",
    "weight": "102.0",
    "years": "1",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/1630228.png",
    "position": "前锋",
    "jerseyNum": "00",
  },
  {
    "cnName": "德雷蒙德-格林",
    "cnAlias": "格林",
    "enName": "Draymond Green",
    "height": "198.1",
    "weight": "104.3",
    "years": "10",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/203110.png",
    "position": "前锋",
    "jerseyNum": "23",
  },
  {
    "cnName": "安东尼·兰姆",
    "cnAlias": "兰姆",
    "enName": "Anthony Lamb",
    "height": "198.1",
    "weight": "102.9",
    "years": "2",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/1630237.png",
    "position": "前锋",
    "jerseyNum": "40",
  },
  {
    "cnName": "泰·杰洛姆",
    "cnAlias": "杰洛姆",
    "enName": "Ty Jerome",
    "height": "195.6",
    "weight": "88.4",
    "years": "3",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/1629660.png",
    "position": "后卫-前锋",
    "jerseyNum": "10",
  },
  {
    "cnName": "凯文-卢尼",
    "cnAlias": "卢尼",
    "enName": "Kevon Looney",
    "height": "205.7",
    "weight": "100.7",
    "years": "7",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/1626172.png",
    "position": "前锋",
    "jerseyNum": "5",
  },
  {
    "cnName": "贾麦考-格林",
    "cnAlias": "贾麦考-格林",
    "enName": "JaMychal Green",
    "height": "205.7",
    "weight": "102.9",
    "years": "8",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/203210.png",
    "position": "前锋-中锋",
    "jerseyNum": "1",
  },
  {
    "cnName": "小帕特里克-鲍德温",
    "cnAlias": "鲍德温",
    "enName": "Patrick Baldwin Jr.",
    "height": "205.7",
    "weight": "99.8",
    "years": "-",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/1631116.png",
    "position": "前锋",
    "jerseyNum": "7",
  },
  {
    "cnName": "摩西-穆迪",
    "cnAlias": "穆迪",
    "enName": "Moses Moody",
    "height": "195.6",
    "weight": "95.7",
    "years": "1",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/1630541.png",
    "position": "后卫",
    "jerseyNum": "4",
  },
  {
    "cnName": "加里-佩顿二世",
    "cnAlias": "加里-佩顿二世",
    "enName": "Gary Payton II",
    "height": "188.0",
    "weight": "88.4",
    "years": "6",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/1627780.png",
    "position": "后卫",
    "jerseyNum": "8",
  },
  {
    "cnName": "安德鲁-伊格达拉",
    "cnAlias": "伊格达拉",
    "enName": "Andre Iguodala",
    "height": "198.1",
    "weight": "97.5",
    "years": "18",
    "logo": "https://res.nba.cn/media/img/players/head/260x190/2738.png",
    "position": "后卫-前锋",
    "jerseyNum": "9",
  },
  {
    "cnName": "莱恩-罗林斯",
    "cnAlias": "罗林斯",
    "enName": "Ryan Rollins",
    "height": "190.5",
    "weight": "81.6",
    "years": "-",
    "logo": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631157.png",
    "position": "后卫",
    "jerseyNum": "2",
  }
]