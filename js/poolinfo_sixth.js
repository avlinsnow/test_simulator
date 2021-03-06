//0:4serv,1:3serv,2:4craft,3:3craft
var pickUpServ5 = ["118"];
var serv5 = ["002", "008", "037", "052", "059", "060", "062", "065", "075", "076", "077", "084", "085", "097", "098", "099", "113", "119"];
var pickUpServ4 = ["120", "121"];
var serv4 = ["003", "005", "006", "010", "011", "014", "018", "029", "030", "041", "046", "047", "048", "058", "066", "067", "074", "078", "082", "087", "089", "094", "100", "101", "102", "103", "109", "116", "122", "123"];
var pickUpServ3 = ["124", "125"];
var serv3 = ["007", "009", "013", "015", "017", "020", "022", "023", "026", "027", "028", "031", "032", "035", "038", "042", "049", "055", "056", "063", "064", "071", "072", "079", "080", "081", "095", "104", "105", "110", "117", "126"];

var pickUpCft5 = ["263"];
var craft5 = ["031", "032", "033", "034", "035", "040", "048", "057", "058", "067", "075", "097", "175", "185", "188"];
var pickUpCft4 = ["264"];
var craft4 = ["021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "038", "039", "047", "056", "066", "073", "074", "098", "176", "182", "183", "184", "186"];
var pickUpCft3 = ["265"];
var craft3 = ["072", "089", "090", "091", "092", "093", "094", "095", "096", "177", "187", "243", "244", "245", "246", "247"];

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