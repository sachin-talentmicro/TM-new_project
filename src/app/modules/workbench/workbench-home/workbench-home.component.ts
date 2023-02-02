import { Component, OnInit } from '@angular/core';
import { WorkBenchService } from '../services/workbench.service';

@Component({
  selector: 'app-workbench-home',
  templateUrl: './workbench-home.component.html',
  styleUrls: ['./workbench-home.component.scss']
})
export class WorkbenchHomeComponent implements OnInit {

  public listData: any[] = [];

  constructor(public workbenchService: WorkBenchService) { }

  ngOnInit(): void {
    this.getTableData();

    // let listData: Array<any> = [
    //   { parentSellerCode: "" },
    //   { companyShortCode: "" },
    //   { companyName: "" },
    //   { totalLicense: "" },
    //   { clientCount: "" },
    //   { jobCount: "" },
    //   { resumeBankCount: "" },
    //   { transactionCount: "" },
    //   { interviewedCount: "" },
    //   { offeredCount: "" },
    //   { onboardedCount: "" }
    // ]
  }

  getTableData() {

    const payload = {
      "search": "",
      "companyType": [],
      "fromDate": "",
      "toDate": ""
    }

    this.workbenchService.createTable(payload).subscribe((response) => {
      console.log(response);
      if(response) {
        this.listData = response.data.list;
        console.log(this.listData);
      }
    })
  }
}
