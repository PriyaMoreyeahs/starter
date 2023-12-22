import { TestBed } from "@angular/core/testing";

import { CareerJobsService } from "./career-jobs.service";

describe("CareerJobsService", () => {
  let service: CareerJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerJobsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
