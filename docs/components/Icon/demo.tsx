import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Icon } from 'components';
import './index.less';

let icons = 
'loading,eye-close,eye close-fill,swap-left,swap-right,step-forward,step-backward,forward,fast-backward,backward,setting-fill,error-fill,camera-fill,tags-fill,tag-fill,unlock-fill,star-fill,unlike-fill,like-fill,eye-fill,customerservice-fill,location-fill,gift-fill,sound-fill,video-fill,skin-fill,rest-fill,file-fill,property safety-fill,safety certificate-f,red envelope-fill,calendar-fill,carry out-fill,account book-fill,plus-square-fill,right-square-fill,up-square-fill,play-square-fill,left-square-fill,code library-fill,close-square-fill,minus-square-fill,down-square-fill,check-square-fill,message-fill,heart-fill,YUAN-circle-fill,trademark-circle-fil,warning-circle-fill,stop-fill,smile-fill,Pound-circle-fill,play-circle-fill,meh-fill,poweroff-circle-fill,Dollar-circle-fill,compass-fill,CI-circle-fill,copyright-circle-fil,frown-fill,EURO-circle-fill,question-circle-fill,plus-circle-fill,right-circle-fill,up-circle-fill,info-circle-fill,close-circle-fill,minus-circle-fill,down-circle-fill,left-circle-fill,check-circle-fill,thunderbolt,fire,stop,gift,desktop,crown,question,enter,close,dash,ellipsis,check,code,italic,font-size,font-colors,pic-right,pic-center,align-left,align-center,align-right,ordered list,unordered list,menu,outdent,rise,stock,swap,fall,download,totop,vertical-align-botto,upload,arrowdown,arrowleft,arrowup,arrowright,double right,doubleleft,fullscreen-exit,fullscreen,down,up,left,right,vertical left,vertical right,arrawsalt,shrink,fork,branches,share,mr,scissor,tags,wrench,tag,shake,phone,pushpin,percentage,man,link,monitor,highlight,disconnect,api,key,edit,attachment,wifi,heat map,gold,star,error,block,heart,credit card,id card,table,mail,image,fund,qrcode,radar chart,sound,notification,video,cloud-sync,cloud-download,cloud,cloud-upload,cloud-server,read,printer,car,gateway,cluster,camera,barcode,laptop,sliders,build,box plot,select,scan,calendar,calendar-check,carry out,contacts,account book,deployment unit,folder-add,folder-open,folder,shopping,rocket,shop,medicinebox,money collect,flag,customerservice,lock,unlock,unlike,like,funnel plot,filter,bank,home,skin,USB,rest,trophy,bell,experiment,bulb,hourglass,delete,alert,insurance ,safety certificate,property safety,security scan,Batch folding,diff,audit,snippets,file-copy,file-text,file-zip,file,file-word,file-ppt,file-unknown,file-markdown,file-image,file-pdf,file-exclamation,file-excel,file-add,file protect,solution,file search,file sync,file -exception,reconciliation,file done,book,red envelope,tablet,mobile,sever,database,container,point map,bar chart,line chart,area chart,team,user,addteam,delete user,delete team,add user,radius-setting,radius-upright,radius-upleft,radius-bottomright,radius-bottomleft,border-horizontal,border-verticle,border-inner,border-right,border-left,border-bottom,border-top,border-outer,border,check-square,interation,calculator,up-square,wallet,project,right-square,plus-square,minus-square,detail,code library,control,play-square,left-square,layout,down-square,close-square,app store,Import,save,export,edit-square,location,eye,setting,pie chart,logout,poweroff,issues close,dashboard,message,reload time,reload,redo,undo,transaction,sync,warning-circle,up-circle,YUAN,earth,time out,time-circle,trademark,smile,right-circle,Pound,question-circle,play-circle,plus-circle,meh,minus-circle,copyright,EURO,down-circle,left-circle,info-circle,frown,close-circle,compass,Dollar,CI,check-circle'.split(',');

icons = icons.map(c => c.replace(/\s/g, ''));

const IconDemo: React.FC = () => {

  return (
    <div className='icon-demo'>
      <ul>
        {icons.map((n) => {
          return (
            <CopyToClipboard key={n} text={`<Icon type='${n}' />`}
              // onCopy={() => { console.log(n) }}
            >
              <li>
                <div className='icon-demo-icon'><Icon type={n} /></div>
                <div className='icon-demo-name'>{n}</div>
              </li>
            </CopyToClipboard>
          )
        })}
      </ul>
    </div>
  )
}

export default IconDemo;
