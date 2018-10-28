const media = [
    {
      title: 'Elite Mind', 
      description: "How winners think differently.",
      type: 'book',
      contributor: 'Dr. Stan',
      showDetail: false,
    },
   
    {
      title: 'The 48 Laws of Power', 
      description: "Power and Law",
      type: 'book',
      contributor: "Robert",
      showDetail: false
    },
     {
      title: 'Hobbit', 
      description: "The Lord of the Shire",
      type: 'DVD',
      contributor: 'Tolkien',
      showDetail: false
    },
    {
      title: 'The Crimes of Dr Watson', 
      description: "An Interactive Sherlock Holmes Mystery.",
      type: 'streaming video',
      contributor: 'Watson',
      showDetail: false,
    },
    {
      title: 'The Kite Runner', 
      description: "The opportunity.",
      type: 'DVD',
      contributor: 'Khaled',
      showDetail: false,
    },
    {
      title: 'Relentless', 
      description: "From Good to Great to Unstoppable",
      type: 'book',
      contributor: 'Tim',
      showDetail: false,
    },
    {
      title: 'McGyver', 
      description: "The American Genius",
      type: 'streaming video',
      contributor: '',
      showDetail: false,
    },
    {
      title: 'Awaken the Giant Within', 
      description: "Taking the immediate control of your mind.",
      type: 'e-book',
      contributor: 'Tony Robbins',
      showDetail: false,
    },
    {
      title: 'The Design of Everyday Things', 
      description: "Design may be our top competitive edge.",
      type: 'e-book',
      contributor: 'Don Norman',
      showDetail: false,
    }
  ]

const app = new Vue({
    el: '#media-list',
    data: {
      title: "Iftekhar's  Personal Library",
      mediaList: media,
      type: ''
    },
    methods: {
      toggleDetails: function(media){
        media.showDetail = !media.showDetail
      },
      filterList: function(){
        this.type = event.target.value;
      }
    },
    computed: {
      uniqueItemsList: function(){
        const types = [];
        this.mediaList.forEach((item)=>{
          if(!types.includes(item.type)){
            types.push(item.type);
          }
        });
        return types;
      }
    }
  });
