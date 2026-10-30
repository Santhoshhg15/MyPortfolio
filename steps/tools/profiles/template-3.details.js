function details(){
  if(!P.name&&!P.role&&!P.email) return '';
  return 'MY DETAILS (collected from my form — use these as my answers and do not ask me again for anything listed here; ask me only about items marked "(not provided)"):\n'
  +'- Full name / brand name: '+v(P.name)+'\n- Role / title: '+v(P.role)+'\n- Email: '+v(P.email)+'\n- City, country: '+v(P.city)+'\n- Phone: '+v(P.phone)+'\n- Availability line: '+v(P.availability)+'\n'
  +'- GitHub: '+v(P.github)+'\n- LinkedIn: '+v(P.linkedin)+'\n- Instagram: '+v(P.instagram)+'\n'
  +'- Hero intro sentence: '+v(P.intro)+'\n- Top-bar status lines:'+ind(P.status)+'\n'
  +'- About me: '+v(P.about)+'\n- Stats:'+ind(P.stats)+'\n'
  +'- Skill modules:'+ind(P.skills)+'\n'
  +'- Projects:'+ind(P.projects)+'\n- Journey / timeline:'+ind(P.journey)+'\n'
  +'- Self-introduction video (YouTube link): '+v(P.introurl)+'\n'
  +'- Project 1 video link: '+v(P.project1video)+'\n'
  +'- Project 2 video link: '+v(P.project2video)+'\n'
  +'- Project 3 video link: '+v(P.project3video)+'\n'
  +'- Project 4 video link: '+v(P.project4video);
}
