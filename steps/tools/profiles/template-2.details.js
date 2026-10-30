function details(){
  if(!P.name&&!P.role&&!P.email) return '';
  return 'MY DETAILS (collected from my form — use these as my answers and do not ask me again for anything listed here; ask me only about items marked "(not provided)"):\n'
  +'- Full name / brand name: '+v(P.name)+'\n- Role / title: '+v(P.role)+'\n- Email: '+v(P.email)+'\n- City, country: '+v(P.city)+'\n- Phone: '+v(P.phone)+'\n'
  +'- GitHub: '+v(P.github)+'\n- LinkedIn: '+v(P.linkedin)+'\n- Instagram: '+v(P.instagram)+'\n- YouTube channel: '+v(P.youtube)+'\n'
  +'- About me (2-3 sentences): '+v(P.about)+'\n- Technologies to highlight in the intro: '+v(P.highlights)+'\n'
  +'- Skills rows:'+ind(P.skills)+'\n- Services:'+ind(P.services)+'\n'
  +'- Projects:'+ind(P.projects)+'\n'
  +'- Self-introduction video (YouTube link): '+v(P.introurl)+'\n'
  +'- Project 1 video link: '+v(P.project1video)+'\n'
  +'- Project 2 video link: '+v(P.project2video)+'\n'
  +'- Project 3 video link: '+v(P.project3video)+'\n'
  +'- Project 4 video link: '+v(P.project4video);
}
