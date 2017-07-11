//0:4serv,1:3serv,2:4craft,3:3craft
var pickUpServ5 = ["114"];
var serv5 = ["002", "008", "037", "052", "059", "060", "062", "065", "075", "076", "084", "085", "097"];
var pickUpServ4 = ["116"];
var serv4 = ["006", "010", "011", "014", "018", "029", "030", "041", "046", "047", "048", "058", "066", "074", "082", "087", "089", "094", "100", "101", "109"];
var pickUpServ3 = ["117", "027", "056"];
var serv3 = ["007", "009", "013", "015", "017", "020", "022", "023", "026", "028", "031", "035", "042", "049", "055",  "063", "064", "071", "072", "079", "080", "081", "095", "104", "105", "110"];

var pickUpCft5 = ["258"];
var craft5 = ["031", "032", "033", "034", "035", "040", "048", "057", "058", "067", "075", "097", "175", "185", "188"];
var pickUpCft4 = ["259"];
var craft4 = ["021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "038", "039", "047", "056", "066", "073", "074", "098", "176", "182", "183", "184", "186"];
var pickUpCft3 = ["260"];
var craft3 = ["072", "089", "090", "091", "092", "093", "094", "095", "096", "177", "243", "244", "245", "246", "247"];


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