import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class PayrollService {
  public API = environment.config.API_URL;

  constructor(private http: HttpClient) {}
  AddPayrollGroup(data) {
    return this.http.post(`${this.API}/api/paygroup/addpaygroup`, data);
  }
  getAllpayGroup() {
    return this.http.get(`${this.API}/api/paygroup/getbyemployeecount`);
  }
  getpayrollyear() {
    return this.http.get(`${this.API}/api/payrollcentral/getpayrollyear`);  
  }
  payrolldashboardgraphoverall() {
    return this.http.get(
      `${this.API}/api/payrollcentral/payrolldashboardgraphoverall`,
    );
  }
  getsalerybreakupofemp() {
    return this.http.get(
      `${this.API}/api/payrollcentral/getsalerybreakupofemp`,
    );
  }
  getpayslipyear() {
    return this.http.get(`${this.API}/api/payrollcentral/getpayslipyear`);
  }
  getpayslipmonth(year) {
    return this.http.get(
      `${this.API}/api/payrollcentral/getpayslipmonth?year=${year}`,
    );
  }
  getpayrollmonth(year) {
    return this.http.get(
      `${this.API}/api/payrollcentral/getpayrollmonth?year=${year}`,
    );
  }
  payslipreport(month, year) {
    return this.http.get(
      `${this.API}/api/payrollcentral/payslipreport?month=${month}&year=${year}`,
    );
  }
  payrolldashboard(year, month) {
    return this.http.get(
      `${this.API}/api/payrollcentral/payrolldashboard?year=${year}&month=${month}`,
    );
  }
  payrolldashboardgraph(year) {
    return this.http.get(
      `${this.API}/api/payrollcentral/payrolldashboardgraph?year=${year}`,
    );
  }

  getpayslipmonthyear(year, month) {
    return this.http.get(
      `${this.API}/api/payrollcentral/getpayslipmonthyear?year=${year}&month=${month}`,
    );
  }
  getemppayslip() {
    return this.http.get(`${this.API}/api/payrollcentral/getemppayslip`);
  }
  getcompletedpaygroup() {
    return this.http.get(`${this.API}/api/paygroups/getcompletedpaygroup`);
  }
  getemployeebypayrollid(id) {
    return this.http.get(
      `${this.API}/api/payrollcentral/getemployeebypayrollid?payGroupId=${id}`,
    );
  }
  getrunpayrolldata(id) {
    return this.http.get(
      `${this.API}/api/payrollcentral/getrunpayrolldata?payGroupId=${id}`,
    );
  }
  runpayrollprerun(id) {
    return this.http.post(
      `${this.API}/api/payrollcentral/runpayrollprerun?payGorupId=${id}`,
      id,
    );
  }
  runpayroll(id) {
    return this.http.post(
      `${this.API}/api/payrollcentral/runpayroll?payGroupId=${id}`,
      id,
    );
  }
  getsetupPayrollById(id) {
    return this.http.get(
      `${this.API}/api/paygroup/getpaygroupsettinginfobyid?payGroupId=${id}`,
    );
  }

  //<<<<<<<<<<< PAYROLL SETTING
  getGeneralPayRollSetting(id) {
    return this.http.get(
      `${this.API}/api/payroll/getgernalpayrollsetting?payGroupId=${id}`,
    );
  }
  getpayfrequencycycle() {
    return this.http.get(`${this.API}/api/extramaster/payfrequencycycle`);
  }
  getpayCycleBySelectedFrequency(freqid) {
    return this.http.get(
      `${this.API}/api/extramaster/paycycle?title=${freqid}`,
    );
  }
  getpaydateBySelectedbaycycle(month) {
    return this.http.get(
      `${this.API}/api/extramaster/paydatecycle?monthName=${month}`,
    );
  }

  addgeneralPayrollSetting(post) {
    return this.http.post(
      `${this.API}/api/payroll/addgeneralpayrollsetting`,
      post,
    );
  }
  //****************Company info ***************
  //city
  getAllCity() {
    return this.http.get(`${this.API}/api/city/GetAllCity`);
  }
  //state
  getAllState() {
    return this.http.get(`${this.API}/api/city/GetAllState`);
  }
  // << Get All Location
  getAllLocation() {
    return this.http.get(`${this.API}/api/extramaster/getalllocation`);
  }
  //country
  getAllCountry() {
    return this.http.get(`${this.API}/api/country/GetAllCountry`);
  }
  // Get Nature Of Businesss
  getAllNatueBusiness() {
    return this.http.get(`${this.API}/api/extramaster/activenatureofbusiness`);
  }
  // <<Get Type Of Businesss
  getAllBusinessType() {
    return this.http.get(`${this.API}/api/extramaster/getallbusinesstype`);
  }
  // << Get All Sector
  getAllSector() {
    return this.http.get(`${this.API}/api/extramaster/getallsector`);
  }
  // << Get All Bank
  getAllBank() {
    return this.http.get(`${this.API}/api/Bank/GetAllBank`);
  }
  // << Get All Bank by id
  getCompanyInfoBank(id) {
    return this.http.get(
      `${this.API}/api/payroll/getcomponyinfobank?payGroupId=${id}`,
    );
  }
  // << Get All Company info
  getCompanyInfo(id) {
    return this.http.get(
      `${this.API}/api/payroll/getcompanyinfo?payGroupId=${id}`,
    );
  }
  // << Get All Location by id
  getCompanyInfoLocation(id) {
    return this.http.get(
      `${this.API}/api/payroll/getcompanylocations?payGroupId=${id}`,
    );
  }
  // << Get All Legal Entities
  getAllLegalEntity() {
    return this.http.get(`${this.API}/api/legalentity/legalentitylist`);
  }
  // << Get  Legal Entity
  getLegalEntityById(id) {
    return this.http.get(
      `${this.API}/api/legalentity/getlegalentitybyid?legalEntityId=${id}`,
    );
  }
  //<< Add Company Info
  AddCompanyInfo(data) {
    return this.http.post(`${this.API}/api/payroll/addupdatecompanyinfo`, data);
  }
  // <<Adds legal entity
  AddLegalEntity(data) {
    return this.http.post(`${this.API}/api/legalentity/addlegalentity`, data);
  }
  // <<Adds Location comp info
  AddLocationCompanyInfo(data) {
    return this.http.post(
      `${this.API}/api/payroll/addupdatecompanyinfolocations`,
      data,
    );
  }
  // <<Adds Bank   comp info
  AddBankCompanyInfo(data) {
    return this.http.post(
      `${this.API}/api/payroll/addupdatecompanyinfobank`,
      data,
    );
  }
  // <<Adds new Bank
  AddBank(data) {
    return this.http.post(`${this.API}/api/Bank/CreateBank`, data);
  }
  addlocation(data) {
    return this.http.post(`${this.API}/api/extramaster/addlocation`, data);
  }
  //***********************PF & ESI SETTING ***************/
  // << Get PF Setting
  getPfSetting(id) {
    return this.http.get(
      `${this.API}/api/payroll/getpfsettings?payGroupId=${id}`,
    );
  }

  getEsiSetting(id) {
    return this.http.get(
      `${this.API}/api/payroll/getesisettings?payGroupId=${id}`,
    );
  }

  Addpfandesiadd(data) {
    return this.http.post(`${this.API}/api/payroll/addupdatepf`, data);
  }

  addUpdateEsi(data) {
    return this.http.post(`${this.API}/api/payroll/addupdateesi`, data);
  }

  //***********************pay roll setup >>> Components >> Recurring***************/

  getAllRecuring() {
    return this.http.get(
      `${this.API}/api/components/allactiverecuringcomponents`,
    );
  }

  getrconsalerycomponent(id) {
    return this.http.get(
      `${this.API}/api/payroll/getrconsalerycomponent?payGroupId=${id}`,
    );
  }
  addupdatesalerycomonent(data) {
    return this.http.post(
      `${this.API}/api/payroll/addupdatesalerycomonent`,
      data,
    );
  }

  getRecuringById(id) {
    return this.http.get(
      `${this.API}/api/components/getrecuringcomponentbyId?recuringComponentId=${id}`,
    );
  }

  deleteSectionById(id) {
    return this.http.post(
      `${this.API}/api/sectioncomponent/delete?sectionId=${id}`,
      id,
    );
  }
  deleteExceptionById(id) {
    return this.http.put(
      `${this.API}/api/exemptioncomponent/deleteexemption?exemptionComponentId=${id}`,
      id,
    );
  }

  deletedeductionById(id) {
    return this.http.put(
      `${this.API}/api/deductioncomponent/deleteexemption?deductionComponentId=${id}`,
      id,
    );
  }
  deleteDeclartionById(id) {
    return this.http.put(
      `${this.API}/api/exemptiondeclaration/delete?ExemptionId=${id}`,
      id,
    );
  }

  addRecuring(data) {
    return this.http.post(`${this.API}/api/components/createcomponent`, data);
  }

  componenttypelist() {
    return this.http.get(`${this.API}/api/components/componenttypelist`);
  }

  addsection(data) {
    return this.http.post(`${this.API}/api/sectioncomponent/create`, data);
  }
  addDeclartion(data) {
    return this.http.post(`${this.API}/api/exemptiondeclaration/create`, data);
  }

  addExcemption(data) {
    return this.http.post(`${this.API}/api/exemptioncomponent/Create`, data);
  }

  addDeclaration(data) {
    return this.http.post(`${this.API}/api/deductioncomponent/create`, data);
  }

  editsection(data) {
    return this.http.post(`${this.API}/api/sectioncomponent/update`, data);
  }
  updateEcceptioncomp(data) {
    return this.http.put(
      `${this.API}/api/exemptioncomponent/editexemption`,
      data,
    );
  }

  updateDeclartion(data) {
    return this.http.put(`${this.API}/api/exemptiondeclaration/update`, data);
  }

  uploadimg(post) {
    return this.http.post(
      `${this.API}/api/exemptioncomponent/documentproof`,
      post,
    );
  }

  editRecuring(data) {
    return this.http.put(
      `${this.API}/api/components/editrecuringcomponent`,
      data,
    );
  }

  deleteRecurring(id) {
    return this.http.put(
      `${this.API}/api/components/deleterecuringcomponent?recuringComponentId=${id}`,
      id,
    );
  }

  //***********************pay roll setup >>> Components >> allowance***************/

  getAllADHOC() {
    return this.http.get(`${this.API}/api/components/allactiveachoc`);
  }

  allactivesection() {
    return this.http.get(`${this.API}/api/sectioncomponent/getall`);
  }

  getMonth() {
    return this.http.get(`${this.API}/api/taxdeductioncomponent/getMonthlist`);
  }

  allactivesectiongetbyid(id) {
    return this.http.get(
      `${this.API}/api/sectioncomponent/getbyid?sectionId=${id}`,
    );
  }

  getdeclartionbyid(id) {
    return this.http.get(
      `${this.API}/api/exemptiondeclaration/getbyid?ExemptionDeclarationId=${id}`,
    );
  }

  allactiveexceptiongetbyid(id) {
    return this.http.get(
      `${this.API}/api/exemptioncomponent/exemptionbyid?exemptionComponentId=${id}`,
    );
  }

  allactiveDeductiongetbyid(id) {
    return this.http.get(
      `${this.API}/api/deductioncomponent/deductionbyid?deductionComponentId=${id}`,
    );
  }

  getadhocosalerycomponent(id) {
    return this.http.get(
      `${this.API}/api/payroll/getadhocosalerycomponent?payGroupId=${id}`,
    );
  }

  addupdatextracomponent(data) {
    return this.http.post(
      `${this.API}/api/payroll/addupdatextracomponent`,
      data,
    );
  }

  getADHOCById(id) {
    return this.http.get(
      `${this.API}/api/components/getadhocbyid?adHocId=${id}`,
    );
  }

  addADHOC(data) {
    return this.http.post(`${this.API}/api/components/createadhoc`, data);
  }

  editADHOC(data) {
    return this.http.put(`${this.API}/api/components/editadhoc`, data);
  }

  deleteADHOC(id) {
    return this.http.put(
      `${this.API}/api/components/deleteadhoc?adHocId=${id}`,
      id,
    );
  }
  //***********************pay roll setup >>> Components >> Bonus***************/

  getAllBonus() {
    return this.http.get(`${this.API}/api/components/allactivebonus`);
  }

  getBonusById(id) {
    return this.http.get(`${this.API}/api/components/bonusbyid?bonusId=${id}`);
  }

  addBonus(data) {
    return this.http.post(`${this.API}/api/components/addbonus`, data);
  }

  editBonus(data) {
    return this.http.put(`${this.API}/api/components/editbonus`, data);
  }

  deleteBonus(id) {
    return this.http.put(
      `${this.API}/api/components/deletebonus?bonusId=${id}`,
      id,
    );
  }

  //***********************pay roll setup >>> Components >> Deduction***************/

  getAllDeduction() {
    return this.http.get(`${this.API}/api/components/allactivededuction`);
  }

  getDeductionById(id) {
    return this.http.get(
      `${this.API}/api/components/deductionbyid?deductionId=${id}`,
    );
  }

  addDeduction(data) {
    return this.http.post(`${this.API}/api/components/adddeduction`, data);
  }

  editDeduction(data) {
    return this.http.put(`${this.API}/api/components/editdeduction`, data);
  }

  deleteDeduction(id) {
    return this.http.put(
      `${this.API}/api/components/deletededuction?deductionId=${id}`,
      id,
    );
  }

  /*********************************** */

  // uploadDoc(data) {
  //   const folderName = "uploadimage";
  //   return this.http.post(
  //     `${this.API}/api/fileupload/Upload?FolderName=${folderName}&BaseUrl=${this.API}/`,
  //     data
  //   );
  // }
  uploadDoc(data) {
    return this.http.post(
      `${this.API}/api/fileupload/Upload?FolderName=uploadimage`,
      data,
    );
  }
  uploadentitysignature(data) {
    return this.http.post(
      `${this.API}/api/legalentity/uploadentitysignature`,
      data,
    );
  }

  getcomponents(id) {
    return this.http.get(
      `${this.API}/api/salerystructure/getcomponents?payGroupId=${id}`,
    );
  }

  getstructurebyid(id) {
    return this.http.get(
      `${this.API}/api/salerystructure/getstructurebyid?structureId=${id}`,
    );
  }

  getsalerystructurelist(id) {
    return this.http.get(
      `${this.API}/api/salerystructure/getsalerystructurelist?payGroupId=${id}`,
    );
  }
  getbonustypelist(id) {
    return this.http.get(
      `${this.API}/api/salerybreakdown/getbonuslistbypaygroupid?payGroupId=${id}`,
    );
  }

  addupdatesalerys(data) {
    return this.http.post(
      `${this.API}/api/salerystructure/addupdatesalerys`,
      data,
    );
  }

  updatesalerystructure(data) {
    return this.http.put(
      `${this.API}/api/salerystructure/updatesalerystructure`,
      data,
    );
  }

  deletesalarystructure(id) {
    return this.http.put(
      `${this.API}/api/salerystructure/deletesalarystructure?structureId=${id}`,
      id,
    );
  }

  getUsablecomponents(id, ids) {
    return this.http.get(
      `${this.API}/api/salerystructure/getcomponents?payGroupId=${id}&structureId=${ids}`,
    );
  }

  getselectedcomponent(id) {
    return this.http.get(
      `${this.API}/api/salerystructure/getselectedcomponent?structureId=${id}`,
    );
  }

  addupdatecomponent(data) {
    return this.http.post(
      `${this.API}/api/salerystructure/addupdatecomponent`,
      data,
    );
  }

  updatecalculation(data) {
    return this.http.post(
      `${this.API}/api/salerystructure/updatecalculation`,
      data,
    );
  }

  deletecomponent(id) {
    return this.http.post(
      `${this.API}/api/salerystructure/deletecomponent?id=${id}`,
      id,
    );
  }

  checksetup(id) {
    return this.http.post(
      `${this.API}/api/salerystructure/checksetup?payGroupId=${id}`,
      id,
    );
  }

  addupdateincometaxdata(data) {
    return this.http.post(
      `${this.API}/api/payroll/addupdateincometaxdata`,
      data,
    );
  }
  addupdatestatutoryflling(data) {
    return this.http.post(
      `${this.API}/api/payroll/addupdatestatutoryflling`,
      data,
    );
  }

  addupdateprovidendfunddata(data) {
    return this.http.post(
      `${this.API}/api/payroll/addupdateprovidendfunddata`,
      data,
    );
  }

  addupdateesidata(data) {
    return this.http.post(`${this.API}/api/payroll/addupdateesidata`, data);
  }

  addptregistation(data) {
    return this.http.post(`${this.API}/api/payroll/addptregistation`, data);
  }

  getincometexdata(id) {
    return this.http.get(
      `${this.API}/api/payroll/getincometexdata?payGroupId=${id}`,
    );
  }
  getstatutoryflling(id) {
    return this.http.get(
      `${this.API}/api/payroll/getstatutoryflling?payGroupId=${id}`,
    );
  }

  getprovidendfunddata(id) {
    return this.http.get(
      `${this.API}/api/payroll/getprovidendfunddata?payGroupId=${id}`,
    );
  }

  getesidata(id) {
    return this.http.get(`${this.API}/api/payroll/getesidata?payGroupId=${id}`);
  }

  getptregistation(id) {
    return this.http.get(
      `${this.API}/api/payroll/getptregistation?payGroupId=${id}`,
    );
  }

  getemployeelist() {
    return this.http.get(`${this.API}/api/payrollcentral/getemployeelist`);
  }

  getemployeelistbyid(id) {
    return this.http.get(
      `${this.API}/api/payrollcentral/getemployeelistbyid?employeeId=${id}`,
    );
  }
  getemployeesalaryinfobyid(id) {
    return this.http.get(
      `${this.API}/api/salerybreakdown/getemployeesalaryinfo?employeeId=${id}`,
    );
  }
  getsalerybreakup(data) {
    return this.http.post(
      `${this.API}/api/payrollcentral/getsalerybreakup`,
      data,
    );
  }

  updatepaygroup(data) {
    return this.http.post(
      `${this.API}/api/payrollcentral/updatepaygroup`,
      data,
    );
  }

  getptrangeenum() {
    return this.http.get(`${this.API}/api/taxable/getptrangeenum`);
  }

  addpt(data) {
    return this.http.post(`${this.API}/api/taxable/addpt`, data);
  }

  addptgroup(data) {
    return this.http.post(`${this.API}/api/taxable/addptgroup`, data);
  }

  getptgroup() {
    return this.http.get(`${this.API}/api/taxable/getptgroup`);
  }

  getcountrydatabyptgorupid(id) {
    return this.http.get(
      `${this.API}/api/taxable/getcountrydatabyptgorupid?ptGroupId=${id}`,
    );
  }

  getgolatype() {
    return this.http.get(`${this.API}/api/goal/getgolatype`);
  }

  addptstate(data) {
    return this.http.post(`${this.API}/api/taxable/addptstate`, data);
  }

  getptstate() {
    return this.http.get(`${this.API}/api/taxable/getptstate`);
  }

  getstatelistbyptgroupid(id) {
    return this.http.get(
      `${this.API}/api/taxable/getstatelistbyptgroupid?ptGroupId=${id}`,
    );
  }

  getstatedurationbyptstateid(id) {
    return this.http.get(
      `${this.API}/api/taxable/getstatedurationbyptstateid?ptStateId=${id}`,
    );
  }

  monthlistonpt() {
    return this.http.get(`${this.API}/api/taxable/monthlistonpt`);
  }

  addptrange(data) {
    return this.http.post(`${this.API}/api/taxable/addptrange`, data);
  }

  getptrange() {
    return this.http.get(`${this.API}/api/taxable/getptrange`);
  }

  getuserlogindetail(data) {
    return this.http.post(
      `${this.API}/api/accounts/getuserlogindetail?token=${data}`,
      data,
    );
  }

  getalltaxdeductioncomponent() {
    return this.http.get(`${this.API}/api/taxdeductioncomponent/getall`);
  }

  createtaxdeductioncomponent(data) {
    return this.http.post(`${this.API}/api/taxdeductioncomponent/create`, data);
  }

  //////// new Pay Role Api //////////////

  getpayGroupDatabyId(id) {
    return this.http.get(
      `${this.API}/api/paygroup/getpaygroupbyid?payGroupId=${id}`,
    );
  }
  editpayGroupDatabyId(data) {
    return this.http.post(`${this.API}/api/paygroup/editpaygroup`, data);
  }
  deletepayGroupDatabyId(id) {
    return this.http.post(
      `${this.API}/api/paygroup/deletepaygroup?payGroupId=${id}`,
      "",
    );
  }
  getsalarybreakdown(post) {
    return this.http.post(
      `${this.API}/api/salerybreakdown/getsalarybreakdownforview`,
      post,
    );
  }

  addupdatesalarybreakdown(post) {
    return this.http.post(
      `${this.API}/api/salerybreakdown/createandupdatesalarybreakdown`,
      post,
    );
  }

  getallunpaidleaveforpayroll(post) {
    return this.http.post(
      `${this.API}/api/applyleaverequest/getallunpaidleaveforpayroll`,
      post,
    );
  }

  applyorrejectleavepayroll(post) {
    return this.http.post(
      `${this.API}/api/applyleaverequest/applyorrejectleavepayroll`,
      post,
    );
  }

  saveleaveapplied(post) {
    return this.http.post(
      `${this.API}/api/payrolldashboardsteps/saveleaveapplied`,
      post,
    );
  }

  savenoattendance(post) {
    return this.http.post(
      `${this.API}/api/payrolldashboardsteps/savenoattendance`,
      post,
    );
  }

  lopsummaryonpayroll(post) {
    return this.http.post(
      `${this.API}/api/payrolldashboardsteps/lopsummaryonpayroll`,
      post,
    );
  }

  setlopsummaryonpayroll(post) {
    return this.http.post(
      `${this.API}/api/payrolldashboardsteps/setlopsummaryonpayroll`,
      post,
    );
  }

  savelopsummary(post) {
    return this.http.post(
      `${this.API}/api/payrolldashboardsteps/savelopsummary`,
      post,
    );
  }

  getfyyeardropdown() {
    return this.http.get(`${this.API}/api/userdeclaration/getfyyeardropdown`);
  }

  getuserdeclarationheader() {
    return this.http.get(
      `${this.API}/api/userdeclaration/getuserdeclarationheader`,
    );
  }

  getdeclarationsectionbytype(post) {
    return this.http.post(
      `${this.API}/api/userdeclaration/getdeclarationsectionbytype`,
      post,
    );
  }

  uploaddeclarationdocuments(post) {
    return this.http.post(
      `${this.API}/api/userdeclaration/uploaddeclarationdocuments`,
      post,
    );
  }

  submitdeclaration(post) {
    return this.http.post(
      `${this.API}/api/userdeclaration/submitdeclaration`,
      post,
    );
  }

  selecttaxregime(post) {
    return this.http.post(
      `${this.API}/api/incometaxcomputation/selecttaxregime`,
      post,
    );
  }

  getnewtaxregimelist(post) {
    return this.http.post(
      `${this.API}/api/incometaxslab/getnewtaxregimelist`,
      post,
    );
  }
}
