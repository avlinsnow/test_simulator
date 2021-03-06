//0:4serv,1:3serv,2:4craft,3:3craft
var pickUpServ5 = ["136"];
var serv5 = ["002", "008", "059",  "062", "065", "075", "076", "097", "113"];
var pickUpServ4 = ["067", "074", "100"];
var serv4 = ["010", "014", "018", "029", "030", "041", "046", "058", "066", "082", "094", "116", "120"];
var pickUpServ3 = [];
var serv3 = ["015", "023", "026", "027", "031", "042", "056", "110", "124"];

var pickUpCft5 = ["309"];
var craft5 = ["031", "032", "033", "034", "035", "040", "048", "057", "058", "067", "075", "097", "175", "185", "188", "263"];
var pickUpCft4 = ["310"];
var craft4 = ["021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "038", "039", "047", "056", "066", "073", "074", "098", "176", "182", "183", "184", "186", "264"];
var pickUpCft3 = ["311"];
var craft3 = ["072", "089", "090", "091", "092", "093", "094", "095", "096", "177", "187", "243", "244", "245", "246", "247", "265"];

var pool = new DrawPool();
var svtPool = new DrawPool();
var goldPool = new DrawPool();

pool.gaussianStdev = 1/3;
svtPool.gaussianStdev = 1/3;
goldPool.gaussianStdev = 1/3;

resetUpRate();
resetDropRate();
// populate pools
resetPools();