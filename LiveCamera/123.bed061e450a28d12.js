"use strict";(self.webpackChunkAngularLiveCameraMap=self.webpackChunkAngularLiveCameraMap||[]).push([[123],{2123:(A,r,t)=>{t.r(r),t.d(r,{ForecastModule:()=>y});var m=t(9808),l=t(7805),p=t(5861),s=t(2340),d=t(4782),u=t(2722),M=t(7579),h=t(9706),e=t(5e3),g=t(5876);const v=[{path:"index.htm",component:(()=>{class o{constructor(n){this.http=n,this.destroy$=new M.x}ngOnInit(){var n=this;return(0,p.Z)(function*(){const c=yield new h.aN({apiKey:s.NZ.googleMapApiKey,version:"weekly",libraries:["places"]}).load();(0,s.w_)("Google API loaded",c);const C={center:{lat:s.NZ.MapDefaultLocation.lat,lng:s.NZ.MapDefaultLocation.lng},zoom:12},i=document.getElementById("toolsForecastMapMain");if(!i)throw new Error("No valid Map container element found.");new c.maps.Map(i,C),n.http.fetchJson("https://www.jma.go.jp/bosai/common/const/area.json").pipe((0,d.d)(1),(0,u.R)(n.destroy$)).subscribe(j=>{console.log("TODO",j)})})()}ngOnDestroy(){this.destroy$.next()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(g.O))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-forecast-main"]],decls:1,vars:0,consts:[["id","toolsForecastMapMain",2,"width","100%","height","600px"]],template:function(n,F){1&n&&e._UZ(0,"div",0)},styles:[""]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.Bz.forChild(v)],l.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,f]]}),o})()}}]);