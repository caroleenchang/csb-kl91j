/*! For license information please see 51.e5329d9f.chunk.js.LICENSE.txt */
(this.webpackJsonpexcalidraw=this.webpackJsonpexcalidraw||[]).push([[51],{198:function(e,i,t){"use strict";t.r(i);const s=async e=>{const i=await e.getFile();return i.handle=e,i};i.default=async(e={})=>{const i={};e.mimeTypes?e.mimeTypes.map((t=>{i[t]=e.extensions||[]})):i["*/*"]=e.extensions||[];const t=await window.showOpenFilePicker({types:[{description:e.description||"",accept:i}],multiple:e.multiple||!1}),n=await Promise.all(t.map(s));return e.multiple?n:n[0]}}}]);
//# sourceMappingURL=51.e5329d9f.chunk.js.map