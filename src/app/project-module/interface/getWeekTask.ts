export interface getWeekDays {
  data: {
    dateJson: [
      {
        dateNew: string;
        day: string;
        isApproved: boolean;
        isCurrent: boolean;
        isHide1: boolean;
        isSFA: boolean;
        spentTime: string;
        viewSpentTime: string;
      }
    ];
    helpForDayDates: [
      {
        date: string;
        day: string;
        isHide: boolean;
        totalWorkingTimeInWeek: string;
        viewDate: string;
      }
    ];
    root: [
      {
        allWorkingTimeInProject: number;
        createdById: number;
        createdDate: string;
        dates: [
          {
            dateNew: string;
            day: string;
            isApproved: boolean;
            isCurrent: boolean;
            isHide1: boolean;
            isSFA: boolean;
            spentTime: string;
            viewSpentTime: string;
          }
        ];
        description: string;
        endDate: string;
        estimateTime: string;
        estimateTimeLong: number;
        isApproved: boolean;
        isBillabel: boolean;
        isReEvaluet: boolean;
        isSFA: boolean;
        projectId: number;
        projectManagerId: number;
        projectName: string;
        re_EvaluteComment: null;
        startDate: string;
        taskBilingStatus: string;
        taskId: string;
        taskIdNumber: number;
        taskName: string;
        taskRequestId: number;
        taskRequestName: string;
        taskType: number;
        totalWorkingTimeInProject: string;
      }
    ];
    totalWorkingEstTime: string;
    totalWorkingTimeInWeek: string;
    message: string;
    status: boolean;
    statusCode: number;
  };
}
