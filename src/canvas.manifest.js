export const manifest = {
  screens: {
    scr_mu5gl1: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_zg0cad: { name: "Find Teachers", route: "/teachers", position: { "x": 160, "y": 2200 } },
    scr_abnnti: { name: "Teacher Profile", route: "/teachers/1", position: { "x": 1560, "y": 2200 } },
    scr_o17xgr: { name: "Jobs Listing", route: "/jobs", position: { "x": 160, "y": 4180 } },
    scr_7mq6wi: { name: "Job Details", route: "/jobs/1", position: { "x": 1560, "y": 4180 } },
    scr_kcvsvb: { name: "Post a Job", route: "/post-job", position: { "x": 2960, "y": 4180 } },
    scr_gmhv2u: { name: "Schools", route: "/schools", position: { "x": 160, "y": 6160 } },
    scr_m4sv27: { name: "Pricing", route: "/pricing", position: { "x": 160, "y": 8140 } },
    scr_e97o2z: { name: "About", route: "/about", position: { "x": 1560, "y": 8140 } },
    scr_usdbke: { name: "FAQ", route: "/faq", position: { "x": 2960, "y": 8140 } },
    scr_n86otc: { name: "Contact", route: "/contact", position: { "x": 4360, "y": 8140 } },
    scr_vi1mo5: { name: "Teacher Reg · Personal Info", route: "/register-teacher", state: { "currentStep": 0 }, position: { "x": 160, "y": 10120 } },
    scr_30fgmo: { name: "Teacher Reg · Education", route: "/register-teacher", state: { "currentStep": 1 }, position: { "x": 1560, "y": 10120 } },
    scr_niqbsw: { name: "Teacher Reg · Experience", route: "/register-teacher", state: { "currentStep": 2 }, position: { "x": 2960, "y": 10120 } },
    scr_qjertz: { name: "Teacher Reg · Documents", route: "/register-teacher", state: { "currentStep": 3 }, position: { "x": 4360, "y": 10120 } },
    scr_rwlucb: { name: "Teacher Reg · Skills", route: "/register-teacher", state: { "currentStep": 4 }, position: { "x": 5760, "y": 10120 } },
    scr_qdmk3o: { name: "Teacher Reg · Verification", route: "/register-teacher", state: { "currentStep": 5 }, position: { "x": 7160, "y": 10120 } },
    scr_avrquz: { name: "Teacher Reg · Finish", route: "/register-teacher", state: { "currentStep": 6 }, position: { "x": 8560, "y": 10120 } },
    scr_l075kn: { name: "School Reg · Details", route: "/register-school", state: { "currentStep": 0 }, position: { "x": 160, "y": 12100 } },
    scr_upajq2: { name: "School Reg · Contact", route: "/register-school", state: { "currentStep": 1 }, position: { "x": 1560, "y": 12100 } },
    scr_hthoa9: { name: "School Reg · Verification", route: "/register-school", state: { "currentStep": 2 }, position: { "x": 2960, "y": 12100 } },
    scr_alxh0l: { name: "School Reg · Subscription", route: "/register-school", state: { "currentStep": 3 }, position: { "x": 4360, "y": 12100 } },
    scr_yotzzp: { name: "School Reg · Finish", route: "/register-school", state: { "currentStep": 4 }, position: { "x": 5760, "y": 12100 } }
  },
  sections: {
    sec_z58f32: { name: "Home", x: 0, y: 0, width: 1520, height: 1180 },
    sec_qt3cy5: { name: "Find Teachers", x: 0, y: 1980, width: 2920, height: 1180 },
    sec_thhjmq: { name: "Jobs Flow", x: 0, y: 3960, width: 4320, height: 1180 },
    sec_wa7hmt: { name: "Schools Directory", x: 0, y: 5940, width: 1520, height: 1180 },
    sec_4ovnfo: { name: "Info & Support", x: 0, y: 7920, width: 5720, height: 1180 },
    sec_a8je4g: { name: "Teacher Registration", x: 0, y: 9900, width: 9920, height: 1180 },
    sec_oq2rbg: { name: "School Registration", x: 0, y: 11880, width: 7120, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_z58f32", children: [
    { kind: "screen", id: "scr_mu5gl1" }]
  },
  { kind: "section", id: "sec_qt3cy5", children: [
    { kind: "screen", id: "scr_zg0cad" },
    { kind: "screen", id: "scr_abnnti" }]
  },
  { kind: "section", id: "sec_thhjmq", children: [
    { kind: "screen", id: "scr_o17xgr" },
    { kind: "screen", id: "scr_7mq6wi" },
    { kind: "screen", id: "scr_kcvsvb" }]
  },
  { kind: "section", id: "sec_wa7hmt", children: [
    { kind: "screen", id: "scr_gmhv2u" }]
  },
  { kind: "section", id: "sec_4ovnfo", children: [
    { kind: "screen", id: "scr_m4sv27" },
    { kind: "screen", id: "scr_e97o2z" },
    { kind: "screen", id: "scr_usdbke" },
    { kind: "screen", id: "scr_n86otc" }]
  },
  { kind: "section", id: "sec_a8je4g", children: [
    { kind: "screen", id: "scr_vi1mo5" },
    { kind: "screen", id: "scr_30fgmo" },
    { kind: "screen", id: "scr_niqbsw" },
    { kind: "screen", id: "scr_qjertz" },
    { kind: "screen", id: "scr_rwlucb" },
    { kind: "screen", id: "scr_qdmk3o" },
    { kind: "screen", id: "scr_avrquz" }]
  },
  { kind: "section", id: "sec_oq2rbg", children: [
    { kind: "screen", id: "scr_l075kn" },
    { kind: "screen", id: "scr_upajq2" },
    { kind: "screen", id: "scr_hthoa9" },
    { kind: "screen", id: "scr_alxh0l" },
    { kind: "screen", id: "scr_yotzzp" }]
  }]

};