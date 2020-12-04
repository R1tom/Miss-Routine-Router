class_r = ""
var txt=""
let time = ['9:30 AM - 10:20 AM', '10:30 AM - 11:20 AM', '11:30 AM - 12:20 PM', '12:30 PM - 1:20 PM', '1:30 PM - 2:20PM', '2:30 PM - 3:20PM', '3:30 PM - 4:20PM', '4:30 PM - 5:20 PM']
let amlan_sir = ['','CG 5TH SEM','','','','','','','','','','','','CG 5TH SEM','','CG LAB 5TH SEM','','SOA 7TH SEM','','','','ALGORITHM LAB 7TH SEM','CG 5TH SEM','','SOA 7TH SEM','','','','','','','','','','','','','','','','','','','','','','','']
let sajal_sir = ['','','','','','','','','','','IOT 7TH SEM','','','','','CCADM LAB 5TH SEM','','IOT 7TH SEM','','','','','','','','CCADM 5TH SEM','','','','','','','IOT 7TH SEM','CCADM 5TH SEM','','','','','','','','','','','','','','']
let pranav_sir = ['','','','','','','','','SWMA 7TH SEM','','','','','OS 5TH SEM','','','','SWMA 7TH SEM','','','','','','OS LAB 5TH SEM','SWMA 7TH SEM','','','','','','OS 5TH SEM','','','','OS 5TH SEM','','','','','SWMA LAB 7TH SEM','','','','','','','','']
let manashee_mam = ['','','IWT 3RD SEM','','','MC 7TH SEM','','','IWT 3RD SEM','','','','','','','','MC 7TH SEM','','','','','IWT 3RD SEM','','','','MC 7TH SEM','','','','','','','','','IWT 3RD SEM','','','','','','','','','','','','','']  
let Tushar_sir =['EEPM 7TH SEM','','','','','','','','','','','','','','','','','','','','','','','','','','','EEPM 7TH SEM','','','','','','','']
let Nazreena_mam=['','','','','','','','','','','ET1384: PROGRAMMING AND DATA STRUCTURE (P&DS) 3rd sem','','','','ET1384: PROGRAMMING AND DATA STRUCTURE (P&DS) 3rd sem','','','','','','','','ET1384: PROGRAMMING AND DATA STRUCTURE (P&DS) 3rd sem','ET1385: PROGRAMMING AND DATA STRUCTURE LABORATORY (P&DS Lab) 3rd sem','','','ET1384: PROGRAMMING AND DATA STRUCTURE (P&DS) 3rd sem','','','','','','','','']
let PG_Ramesh=['PHEV 5 th sem','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
let mousoomi_mam=['','','','','','OOP(5)','','','','OOP(5)','','','','','','','','DWMM(5)','','','','','','','','DWMM(5)','OOP(5)','','','','DWMM Lab(5)','','','','','','','','OOP Lab(5)','','','','','','','','','','']
let nilakshi_mam=['','','ULP (3)','IWT (3)','','','','','ULP Lab (3)','IWT (3)','AI (5)','','','','','','','','','','','','IWT (3)','SOA Lab (7)','','ULP (3)','','','AI (5)','','','','IWT Lab (3 sem)','','ULP (3)','IWT (3)','','','','','']
let kusum_mam = ['','','','','','','','ULP Lab (3 sem)','','','','','','','','','','','','','','','','P&Ds LAB(3sem)','','','','','','','','','','','','','','','','','','','','','','','','']
let sudarshana_mam=['','','','','','','','CCADM Lab (5 sem)','','','','','','','','','','','','','','','SOA Lab (7sem)','','','','','','','','','DWMM Lab (5sem)','','','','','','','','SWMA Lab (7sem)','','','','','','','','']



let third_sem = ['','ULP (NG, SET 6)','IWT (NG/MK, SET 6)' ,'LUNCH','Math III (BKD, SET 6)','','DSLD (PB/KB, SET 6)','ULP Lab   (NG+KD, SET 6)','IWT (NG/MK, SET 6)','','P&DS(NR, SET 6)','','LUNCH','Math III (SA, SET 6)','P&DS(NR, SET 6)','','DSLD (PB/KB, SET 6)','','P and DS(NR, SET 6)' ,'LUNCH','Math III (BKD, SET 6)','IWT (NG/MK,  SET 6)' ,'','P and DS Lab  (NR andKD,  SET 6)','ULP (NG,  SET 6)','',' P&DS(NR,  SET 6)' ,'LUNCH','Math III (SA, SET 6)' ,'DSLD(PB/KB,  SET 6)','','IWT Lab (NG+BB,  SET 6)','DSLD Lab (PB/KB, SET 6)','ULP (NG,  SET 6)','IWT (NG/MK,  SET 6)','','LUNCH','PS-I(BG,  SET 6)','PS-I(BG,  SET 6)','','Mentoring','Mentoring','Mentoring','Mentoring',	'Club activity','SEMINAR ( SET 6)','SEMINAR ( SET 6)','SEMINAR ( SET 6)']
let fifth_sem = ['PEHV(PGR, SET 7)','CG (AJB, SET 7)','','TA(Conducted by Faculty of TIME)','TA(Conducted by Faculty of TIME)',' LUNCH','OOP(MB, SET 7)','CCADM Lab (SS+SUS, SET 7)','','AI(NG, SET 7)','OOP (MB, SET 7)','','LUNCH','CG(AJB, SET 7)','OS(PK, SET 7)','CG Lab (AJB+GG, SET 7)','','DWMM(MB SET 7)/CCADM(SS, SET 9)','AI(NG, SET 7)','LUNCH','','CG(AJB, SET 7)','OS Lab (PK,SET 7)','DWMM(MB, SET 7)/CCADM(SS, SET 9)','OOP(MB, SET 7)','AI(NG, SET 7)','LUNCH','','OS(PK, SET 7)','DWMM  Lab (MB+SUS, SET 7)','CCADM(SS, SET 9)/DWMM(MB, SET 7)','OS(PK, SET 7)','','LUNCH','TA(Conducted by Faculty of TIME)','TA(Conducted by Faculty of TIME)','OOP Lab (MB, SET 7)','TA(Conducted by Faculty of TIME)','TA(Conducted by Faculty of TIME)','Mentoring','Club activity','SEMINAR ( SET 7)','SEMINAR ( SET 7)','SEMINAR ( SET 7)','','','',''	]
let seventh_sem=['EEPM (TKB, SET 6)','','IOT(SS, SET 7)','LUNCH',' MC(MK, SET 6)','','','SOA(AJB, SET 7)/SWMA(PK, SET 8)','IOT(SS, SET 6)','','','LUNCH','','','','MC(MK, SET 7)','SOA(AJB, SET 6)/SWMA(PK, SET 8)','','','LUNCH','Algorithm Lab  (AJB+BB, SET 7)','SOA Lab (NG+SUS, SET 6)','','SOA(AJB, SET 7)/SWMA(PK, SET 8)','MC(MK, SET 6)','','','LUNCH','','','','IOT(SS, SET 7)','','','','LUNCH','','','SWMA Lab (PK+SUS, SET 6)','EEPM (TKB, SET 7)',' Minor Project (SET 7)','Minor Project (SET 7)','Club activity','Mentoring','Mentoring','Mentoring','','']

let subjects_third = "PS-1: ET1136 : PROFFESIONAL SKILLS-I" + "\r\n" +					
                "Math III:ET1123: MATHEMATICS -III"	+ "\r\n" +					
                "P&DS: ET1384: PROGRAMMING AND DATA STRUCTURE"	+ "\r\n" +					
                "DSLD: ET1513: DIGITAL SYSTEM AND LOGIC DESIGN"	+ "\r\n" +					
                "ULP: ET1339: UNIX AND LINUX PROGRAMMING" + "\r\n"		+				
                "IWT: ET1352: INTERNET AND WEB TECHNOLOGY" + "\r\n"	+
                "P&DS Lab: ET1385: PROGRAMMING AND DATA STRUCTURE LABORATORY" + "\r\n" +										
                    "DSLD Lab: ET1519: DIGITAL SYSTEM AND LOGIC DESIGN LABORATORY" + "\r\n"		+			
                    "ULP Lab: ET1340: UNIX AND LINUX PROGRAMMING LABORATORY		"	+ "\r\n"	+						
                    "IWT Lab: ET1353: INTERNET AND WEB TECHNOLOGY LABORATORY	"		+ "\r\n"		
					
let subject_fifth = "TA: ET1132: TECHNICAL APTITUDE-1 "	+ "\r\n"			+		
                "OS: ET1350: OPERATING SYSTEMS	"	+ "\r\n"				+
                "CCADM: IBM1310: Cloud Computing Architecture and Deployment Models"					+ "\r\n"	+
                "DWMM: IBM1331: DATA WAREHOUSING AND MULTIEDIA MODELLING "				+ "\r\n"		+
                "AI: ET1356: ARTIFICIAL INTELIGENCE	"				+ "\r\n"	+
                "PEHV: UN1121:PROFESSIONAL ETHICS AND HUMAN VALUES "				+ "\r\n"	+	
                "CG: ET1343: COMPUTER GRAPHICS		"			+ "\r\n"	+
                "OOP: ET1323: OBJECT ORIENTED PROGRAMMING USING JAVA "	+ "\r\n"
                                
                "OS LAB: ET1351: OPERATING SYSTEMS LABORATORY	" + "\r\n" +				
                "DWMM Lab: IBM1331: DATA WAREHOUSING AND MULTIEDIA MODELLING LABORATORY" + "\r\n" +					
                "CG Lab: ET1344: COMPUTER GRAPHICS LABORATORY	"				+ "\r\n" +
                "OOP Lab: ET1324: OBJECT ORIENTED PROGRAMMING USING JAVA LABORATORY	"		+ "\r\n" +							
                "CCADM: IBM1311: CLOUD COMPUTING ARCHITECTURE AND DEPLOYMENT MODELS LABORATORY"			+ "\r\n" 
let subject_seventh = "EEPM: ET1126: Engineering Economics and Principles of Management"	+ "\r\n" +				
                "IOT: : Internet Of Things	"		+ "\r\n" +		
                "SOA: IBM1317: Service Oriented Architecture "	+ "\r\n" +				
                "SWMA: IBM1329:  Social, Web and Mobile Analytics "+ "\r\n" +					
                "MC: ET1366: MOBILE COMPUTING	"				+ "\r\n" +					
                "SOAL: IBM1318: Service Oriented Architecture Laboratory "		+ "\r\n" +			
                "SWMAL: IBM1330: Social, Web and Mobile Analytics Laboratory "			+ "\r\n" +		
                "ET1358: MINOR PROJECT	"				+ "\r\n" 
                							



function main(params) {
    var request = require("request-promise")
    var week_no =""
    class_r = ""
    var txt=""
    
   var options = {
      url: "http://worldtimeapi.org/api/timezone/Asia/Kolkata",
      json: true
   };
   
   return request(options)
   .then(res=> {
       var obj = {response : res.day_of_week}
        var no = obj.response
        var string = JSON.stringify(no)
        console.log(string)
        if(string=="3"){
            week_no = "3"
            console.log(week_no)
        }
        switch(string) {
                  case "1":
                    week_rn = "monday"
                    break;
                  case "2":
                    week_rn = "tuesday"
                    break;
                    
                  case "3":week_rn = "wednesday"
                    break;
                  
                  case "4":week_rn = "thursday"
                    break;
                    
                  case "5":week_rn = "friday"
                    break;
                    
                  case "6":week_rn = "saturday"
                    break;
                    
                  default:
                    week_rn = "shit"
}
                    
                    if (params.categ == "faculty"){
                        
                        switch(params.name){
                            
                            case "sajal":  getTheClass(sajal_sir,params)
                                break;
                            case "amlan" :  getTheClass(amlan_sir,params)
                                break;
                            case "pranav" : getTheClass(pranav_sir,params)
                                break;
                            case "manashee" : getTheClass(manashee_mam,params)
                                break;
                            case "tushar" : getTheClass(Tushar_sir,params)
                                break;    
                            case "nazreena" : getTheClass(Nazreena_mam,params)
                                break;
                            case "ramesh" : getTheClass(PG_Ramesh,params)
                                break;    
                            case "mousoomi" : getTheClass(mousoomi_mam,params)
                                break;  
                            case "nilakshi" : getTheClass(nilakshi_mam,params)
                                break;  
                            case "kusum" : getTheClass(kusum_mam,params)
                                break;      
                            case "sudarshana" : getTheClass(sudarshana_mam,params)
                                break;
                            
                                 
                            default:
                        }
                        
                    }
                    if(params.categ=="students"){
                        
                        switch(params.name){
                            
                            case "third": getTheClass(third_sem,params)
                                            break;
                            case "fifth": getTheClass(fifth_sem,params)
                                            break;
                            case "seventh": getTheClass(seventh_sem,params)
                                            break;
                            default:
                        }
                            
                        }
                  if(params.categ == "getWholeDayClass"){
                        switch(params.name){
                            
                            case "sajal":  txt = get_all_class(time,sajal_sir,params)
                                break;
                            case "amlan" :  txt = get_all_class(time,amlan_sir,params)
                                break;
                            case "pranav" : txt = get_all_class(time,pranav_sir,params)
                                break;
                            case "manashee" :txt = get_all_class(time,manashee_mam,params)
                                break;
                            case "tushar" :txt = get_all_class(time,Tushar_sir,params)
                                break;    
                            case "nazreena" :txt = get_all_class(time,Nazreena_mam,params)
                                break;
                            case "ramesh" : txt =get_all_class(time,PG_Ramesh,params)
                                break;    
                            case "mousoomi" : txt =get_all_class(time,mousoomi_mam,params)
                                break;  
                            case "nilakshi" :txt = get_all_class(time,nilakshi_mam,params)
                                break;  
                            case "kusum" :txt = get_all_class(time,kusum_mam,params)
                                break;      
                            case "sudarshana" :txt = get_all_class(time,sudarshana_mam,params)
                                break;    
                            default:
                    }
                        
                    }
                if(params.categ == "getWholeDayClassStudents"){
                        
                        switch (params.name){
                            
                            case "third": txt = get_all_class(time,third_sem,params)
                                            break;
                            case "fifth": txt = get_all_class(time,fifth_sem,params)
                                            break;
                            case "seventh": txt = get_all_class(time,seventh_sem,params)
                                            break;
                            default:
                        }
                    }
                    
                    if(class_r == ''){
                        class_r = "Looks like you have no class now !!"
                    }
                    if(txt == ''){
                        txt = "Looks like you have no class today !!"
                    }
                    return {message: class_r,
                            message1 : txt
                    }
        
        
                    
                   
 
   })
   request.on('error', function(err) {
    // Handle error
    return {message: "Looks like You have a unstable internet connection ! Please restart the process",
                            message1 : "Looks like You have a unstable internet connection ! Please restart the process"
                    }
    
});
   
                   
}

    


function getTheClass(ss,params){
    
    
     if(week_rn == "monday"){
         console.log(ss[1])
            if(params.time == "nine" ){
                     class_r = ss[0]
                                                
             }else if(params.time == "ten" ){
                 
                    class_r = ss[1]
                    return class_r
                                                
             }else if(params.time == "eleven" ){
                   class_r = ss[2]
                                                
              }else if(params.time == "twelve" ){
                     class_r = ss[3]
                                                
             }else if(params.time == "one" ){
                       class_r = ss[4]
                                                
             }else if(params.time == "two" ){
                      class_r = ss[5]
                                        
             }else if(params.time == "three" ){
                      class_r = ss[6]
                                        
             }else if(params.time == "four" ){
                      class_r = ss[7]
                                        
             }
                                        
        
    }else if(week_rn == "tuesday"){
        if(params.time == "nine" ){
                     class_r = ss[8]
                                                
             }else if(params.time == "ten" ){
                    class_r = ss[9]
                                                
             }else if(params.time == "eleven" ){
                   class_r = ss[10]
                                                
              }else if(params.time == "twelve" ){
                     class_r = ss[11]
                                                
             }else if(params.time == "one" ){
                       class_r = ss[12]
                                                
             }else if(params.time == "two" ){
                      class_r = ss[13]
                                        
             }else if(params.time == "three" ){
                      class_r = ss[14]
                                        
             }else if(params.time == "four" ){
                      class_r = ss[15]
                                        
             }
        
    }else if(week_rn =="wednesday"){
        
        if(params.time == "nine" ){
                     class_r =ss[16]
                                                
             }else if(params.time == "ten" ){
                    class_r = ss[17]
                                                
             }else if(params.time == "eleven" ){
                   class_r = ss[18]
                                                
              }else if(params.time == "twelve" ){
                     class_r =ss[19]
                                                
             }else if(params.time == "one" ){
                       class_r = ss[20]
                                                
             }else if(params.time == "two" ){
                      class_r = ss[21]
                                        
             }else if(params.time == "three" ){
                      class_r = ss[22]
                                        
             }else if(params.time == "four" ){
                      class_r = ss[23]
                                        
             }
        
    }else if(week_rn =="thursday"){
        if(params.time == "nine" ){
                     class_r = ss[24]
                                                
             }else if(params.time == "ten" ){
                    class_r = ss[25]
                                                
             }else if(params.time == "eleven" ){
                   class_r = ss[26]
                                                
              }else if(params.time == "twelve" ){
                     class_r = ss[27]
                                                
             }else if(params.time == "one" ){
                       class_r =ss[28]
                                                
             }else if(params.time == "two" ){
                      class_r = ss[29]
                                        
             }else if(params.time == "three" ){
                      class_r = ss[30]
                                        
             }else if(params.time == "four" ){
                      class_r = ss[31]
                                        
             }
        
    }else if(week_rn =="friday"){
        if(params.time == "nine" ){
                     class_r = ss[32]
                                                
             }else if(params.time == "ten" ){
                    class_r = ss[33]
                                                
             }else if(params.time == "eleven" ){
                   class_r = ss[34]
                                                
              }else if(params.time == "twelve" ){
                     class_r = ss[35]
                                                
             }else if(params.time == "one" ){
                       class_r =ss[36]
                                                
             }else if(params.time == "two" ){
                      class_r = ss[37]
                                        
             }else if(params.time == "three" ){
                      class_r = ss[38]
                                        
             }else if(params.time == "four" ){
                      class_r = ss[39]
                                        
             }
        
    }else if(week_rn == "saturday"){
        if(params.time == "nine" ){
                     class_r = ss[40]
                                                
             }else if(params.time == "ten" ){
                    class_r = ss[41]
                                                
             }else if(params.time == "eleven" ){
                   class_r = ss[42]
                                                
              }else if(params.time == "twelve" ){
                     class_r = ss[43]
                                                
             }else if(params.time == "one" ){
                       class_r =ss[44]
                                                
             }else if(params.time == "two" ){
                      class_r = ss[45]
                                        
             }else if(params.time == "three" ){
                      class_r = ss[46]
                                        
             }else if(params.time == "four" ){
                      class_r = ss[47]
                                        
             }
    }
    
}
function get_all_class(time,ss,params){
    var temp = ""
    var j,i
     if(week_rn == "monday"){
        for( i =0,j=0;i<=7;i++){
           
            if(ss[i]!=''){
            temp += ss[i] + " from " +time[j] + "\r\n"
            }
             j++
        }
        return temp
    }else if(week_rn == "tuesday"){
        for( i =8,j=0;i<=15;i++){
            
            if(ss[i]!=''){
            temp += ss[i] + " from " +time[j] + "\r\n"
            }
            j++
        }
            
        
        return temp
    }else if(week_rn == "wednesday"){
        for( i =16,j=0;i<=23;i++){
          
            if(ss[i]!=''){
            temp += ss[i] + " from " +time[j] + "\r\n"
            }
              j++
        }
        return temp
    }else if(week_rn == "thursday"){
        for( i =24,j=0;i<=31;i++){
            
            if(ss[i]!=''){
            temp += ss[i] + " from " +time[j] + "\r\n"
            }
            j++
        }
        return temp
    }else if(week_rn == "friday"){
        for( i =32,j=0;i<=39;i++){
            
            if(ss[i]!=''){
            temp += ss[i] + " from " +time[j] + "\r\n"
            }
            j++
        }
        return temp
    }else if(week_rn == "saturday"){
        for( i =40,j=0;i<=47;i++){
            
            if(ss[i]!=''){
            temp += ss[i] + " from " +time[j] + "\r\n"
            }
            j++
        }
        return temp
    }
}
