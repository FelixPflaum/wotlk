import{A as e,aq as t,ap as a,g1 as s,S as l,eb as i,L as n,j as d,k as o,g2 as r,E as p,cn as c,cq as m,cs as S,aG as f,bq as u,B as h,aH as I,a2 as g,F as w,bg as P,w as T,b4 as v,g as y,u as b,aU as O,bF as D}from"./detailed_results-77112d1d.chunk.js";import{m as F,c as A,d as C,e as H,p as k,f as M,r as R,T as U,I as W}from"./preset_utils-065656ac.chunk.js";import{j,k as B,P as N}from"./presets-f536e8f8.chunk.js";const G=F({fieldName:"powerInfusionTarget",id:e.fromSpellId(10060),extraCssClasses:["within-raid-sim-hide"],getValue:e=>e.getSpecOptions().powerInfusionTarget?.type==t.Player,setValue:(e,s,l)=>{const i=s.getSpecOptions();i.powerInfusionTarget=a.create({type:l?t.Player:t.Unknown,index:0}),s.setSpecOptions(e,i)}}),x=F({fieldName:"useInnerFire",id:e.fromSpellId(48168)}),E=F({fieldName:"useShadowfiend",id:e.fromSpellId(34433)}),L={inputs:[A({fieldName:"useDevouringPlague",label:"Use Devouring Plague",labelTooltip:"Use Devouring Plague whenever its not active."}),A({fieldName:"useShadowWordDeath",label:"Use Shadow Word: Death",labelTooltip:"Use Shadow Word: Death whenever off CD."}),A({fieldName:"useMindBlast",label:"Use Mind Blast",labelTooltip:"Use Mind Blast whenever off CD."}),A({fieldName:"memeDream",label:"Meme Dream",labelTooltip:"Assumes 2nd Smite Priest in raid, so just spams HF + Smite with permanent HF uptime.",extraCssClasses:["within-raid-sim-hide"]}),C({fieldName:"allowedHolyFireDelayMs",label:"Allowed Delay for HF",labelTooltip:"Time, in milliseconds, the player is allowed to wait for Holy Fire if it is about to come off CD."})]},q={items:[{id:40562,enchant:3820,gems:[41333,42144]},{id:44661,gems:[39998]},{id:40459,enchant:3810,gems:[42144]},{id:44005,enchant:3859,gems:[42144]},{id:40234,enchant:1144,gems:[39998,39998]},{id:44008,enchant:2332,gems:[39998,0]},{id:40454,enchant:3604,gems:[40049,0]},{id:40561,enchant:3601,gems:[39998]},{id:40560,enchant:3719},{id:40558,enchant:3826},{id:40719},{id:40399},{id:40255},{id:40432},{id:40395,enchant:3834},{id:40273},{id:39712}]},V={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{dotIsActive:{spellId:{spellId:48135}}},{cmp:{op:"OpLe",lhs:{spellCastTime:{spellId:{spellId:48123}}},rhs:{dotRemainingTime:{spellId:{spellId:48135}}}}}]}},castSpell:{spellId:{spellId:14751}}}},{action:{condition:{and:{vals:[{dotIsActive:{spellId:{spellId:48135}}},{cmp:{op:"OpLe",lhs:{spellCastTime:{spellId:{spellId:48123}}},rhs:{dotRemainingTime:{spellId:{spellId:48135}}}}}]}},castSpell:{spellId:{spellId:48123}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:48300}}}}},castSpell:{spellId:{spellId:48300}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:48125}}}}},castSpell:{spellId:{spellId:48125}}}},{action:{castSpell:{spellId:{spellId:48135}}}},{action:{condition:{and:{vals:[{not:{val:{spellIsReady:{spellId:{spellId:48135}}}}},{cmp:{op:"OpLe",lhs:{spellTimeToReady:{spellId:{spellId:48135}}},rhs:{const:{val:"50ms"}}}}]}},wait:{duration:{spellTimeToReady:{spellId:{spellId:48135}}}}}},{hide:!0,action:{condition:{auraIsActive:{auraId:{spellId:59e3}}},castSpell:{spellId:{spellId:48123}}}},{hide:!0,action:{castSpell:{spellId:{spellId:53007}}}},{hide:!0,action:{castSpell:{spellId:{spellId:48158}}}},{hide:!0,action:{castSpell:{spellId:{spellId:48127}}}},{hide:!0,action:{castSpell:{spellId:{tag:3,spellId:48156}}}},{action:{castSpell:{spellId:{spellId:48123}}}}]},_=H("Preraid Preset",{items:[{id:42553,enchant:3820,gems:[41333,40014]},{id:40680},{id:34210,enchant:3810,gems:[42144,40014]},{id:41610,enchant:3859},{id:43792,enchant:1144,gems:[42144,40049]},{id:37361,enchant:2332,gems:[0]},{id:39285,enchant:3246,gems:[40014,0]},{id:40696,gems:[40049,39998]},{id:37854,enchant:3719},{id:44202,enchant:3826,gems:[40026]},{id:43253,gems:[42144]},{id:39250},{id:37835},{id:37873},{id:41384,enchant:3834},{id:40698},{id:37177}]}),K=H("P1 Preset",q),z=s.create({useDevouringPlague:!0,useShadowWordDeath:!1,useMindBlast:!1}),J=k("Legacy Default",l.SpecSmitePriest,z),Q=M("Default",V),X={name:"Standard",data:i.create({talentsString:"05332031013005023310001-005551002020152-00502",glyphs:n.create({major1:d.GlyphOfSmite,major2:d.GlyphOfShadowWordPain,major3:d.GlyphOfShadowWordDeath,minor1:o.GlyphOfFortitude,minor2:o.GlyphOfShadowfiend,minor3:o.GlyphOfFading})})},Y=r.create({useInnerFire:!0,useShadowfiend:!0,powerInfusionTarget:a.create()}),Z=p.create({flask:c.FlaskOfTheFrostWyrm,food:m.FoodFishFeast,defaultPotion:S.RunicManaInjector,prepopPotion:S.PotionOfWildMagic}),$=f.create({giftOfTheWild:u.TristateEffectImproved,arcaneBrilliance:!0,divineSpirit:!0,totemOfWrath:!0,moonkinAura:u.TristateEffectImproved,wrathOfAirTotem:!0,sanctifiedRetribution:!0,bloodlust:!0}),ee=h.create({blessingOfKings:!0,blessingOfWisdom:u.TristateEffectImproved,blessingOfMight:u.TristateEffectImproved,vampiricTouch:!0}),te=I.create({faerieFire:u.TristateEffectImproved,ebonPlaguebringer:!0,heartOfTheCrusader:!0,judgementOfWisdom:!0}),ae=R(l.SpecSmitePriest,{cssClass:"smite-priest-sim-ui",cssScheme:"priest",knownIssues:[],epStats:[g.StatIntellect,g.StatSpirit,g.StatSpellPower,g.StatSpellHit,g.StatSpellCrit,g.StatSpellHaste,g.StatMP5],epReferenceStat:g.StatSpellPower,displayStats:[g.StatHealth,g.StatStamina,g.StatIntellect,g.StatSpirit,g.StatSpellPower,g.StatSpellHit,g.StatSpellCrit,g.StatSpellHaste,g.StatMP5],modifyDisplayStats:e=>{let t=new w;return t=t.addStat(g.StatSpellHit,1*e.getTalents().shadowFocus*P),{talents:t}},defaults:{gear:K.gear,epWeights:w.fromMap({[g.StatIntellect]:.38,[g.StatSpirit]:.38,[g.StatSpellPower]:1,[g.StatSpellHit]:1.65,[g.StatSpellCrit]:.32,[g.StatSpellHaste]:.78,[g.StatMP5]:.35}),consumes:Z,rotation:z,talents:X.data,specOptions:Y,raidBuffs:$,partyBuffs:T.create({}),individualBuffs:ee,debuffs:te},playerIconInputs:[G,x,E],rotationInputs:L,includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[U]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[X],rotations:[J,Q],gear:[_,K]},autoRotation:e=>Q.rotation.rotation,raidSimPresets:[{spec:l.SpecSmitePriest,tooltip:v[l.SpecSmitePriest],defaultName:"Smite",iconUrl:y(b.ClassPriest,3),talents:X.data,specOptions:Y,consumes:Z,defaultFactionRaces:{[O.Unknown]:D.RaceUnknown,[O.Alliance]:D.RaceDwarf,[O.Horde]:D.RaceUndead},defaultGear:{[O.Unknown]:{},[O.Alliance]:{1:K.gear,2:j.gear,3:B.gear,4:N.gear},[O.Horde]:{1:K.gear,2:j.gear,3:B.gear,4:N.gear}}}]});class se extends W{constructor(e,t){super(e,t,ae)}}export{se as S};
//# sourceMappingURL=sim-29d1d67f.chunk.js.map
