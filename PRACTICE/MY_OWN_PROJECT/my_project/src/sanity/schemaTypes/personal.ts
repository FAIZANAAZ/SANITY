

export const personalinfo ={
    title: 'Personal Information',
    name: 'personalInformation',
    type: 'document',
    fields: [
      {
        title: 'ENTER YOUR NAME',
        name: 'name',
        type: 'string'
      },
      // number
      {
        title: 'ENTER YOUR AGE',
        name: 'age',
        type: 'number'
      },
      // image
      {
        title: 'Upload Image',
        name: 'image',
        type: 'image'
      },
      // array
      {
        title: 'ENTER YOUR HOBBIES',
        name: 'hobbies',
        type: 'array',
        of: [{type: 'string'}]
      },

      // tags

      {
        title: 'TAGS',
        name: 'tags',
        type: 'array',
        of: [{type: 'string'}],
        options:{layout:'tags'}

      },
      // boolean
      {
        title: 'ARE YOU A STUDENT?',
        name: 'student',
        type: 'boolean'
      },
      // date
      {
        title: 'Release date',
        name: 'releaseDate',
        type: 'date'
      },
      // datetime
      {
        title: 'Launch Scheduled At',
        name: 'launchAt',
        type: 'datetime'
      },
      // Gender
      {
        title: 'GENDER',
        name: 'gender',
        type: 'string',
        options:{list:[
          {title : 'Male', value: 'male'},
          {title : 'FeMale', value: 'female'}
        ]}
      },
// Block like 

// Blog (Rich Text / Block Content):
// Definition: Blog ya "Rich Text" Sanity mein block type ka use karta hai jo complex aur formatted content ko store karne ke liye hota hai.
// Purpose: Blog ka use structured, formatted aur rich content ke liye hota hai, jaise:
// Headings (H1, H2...)
// Bold, Italic, Underline text
// Lists (Ordered/Unordered)
// Links
// Images and Embedded media
// Input Type: Rich Text Editor (Sanity ke editor mein aap formatting add kar sakte hain).
// Example Use Case:
// Blog Posts
// Articles
// News Content
// Complex Pages
      {
        title: 'ABOUT YOUR JOURNEY',
        name: 'journey',
        type: 'array',
        of: [{type: 'block'}]
      },
      
// GeoPoint Field Ka Role:
// Location Data Store Karna:
// GeoPoint latitude, longitude aur optional altitude ko store karta hai.

// Map Integration:
// Is data ka istemal maps ke sath integration ke liye kiya jata hai, jahan aap kisi jagah ko visualize kar sakte hain.

// Query Support:
// GeoPoint fields ko queries mein istemal karke location-based filtering aur sorting kar sakte hain.


// Sanity Studio Display:
// Place Name: Ek simple input field jahan aap location ka naam likh sakte hain (optional).
// GeoPoint Field: Is field mein:
// Latitude: X-axis (North/South)
// Longitude: Y-axis (East/West)
// Yeh field aapko latitude aur longitude input karne ka option deta hai.
      {
        title: 'MENU BOX',
        name: 'menu',
        type: 'geopoint'
      },
      // Object
      {
        title: 'Address',
        name: 'address',
        type: 'object',
        fields: [
          {name: 'street', type: 'string', title: 'Street name'},
          {name: 'streetNo', type: 'string', title: 'Street number'},
          {name: 'city', type: 'string', title: 'City'}
        ]
      }
,


// for 2 documnets reference matlb kisi or shema sy ki chiz ismy lana jesy hm krty hen import export data


    
          {
            title: 'Nationality',
            name: 'national',
            type: 'reference',
            to: [{type: 'option'}]},
            // to me hm dosrypage waly ka name rakhengy
    
    
      {
        title: ' URL',
        name: 'imageUrl',
        type: 'url'
      },
       //file
      {
        title: 'Manuscript',
        name: 'manuscript',
        type: 'file'},

// slug for uniq url ismy hm kch bhi likhdengy wo uniq tags url bnkr ayga khod


// Sanity Studio mein Slug ek special type ka schema field hota hai jo typically URLs ke liye unique aur readable identifiers banata hai.

// Slug ka Role:
// Unique Identifiers:
// Slug ka istemal content ke liye unique URLs create karne ke liye hota hai.

// Human-Readable URLs:
// Slug readable aur SEO-friendly URLs banata hai, jisme spaces aur special characters replace ho jate hain.
// Example:

// Content Title: My First Blog Post
// Slug: my-first-blog-post
// Automatic Generation:
// Sanity me slug ko kisi aur field se automatically generate kar sakte hain, jaise title field.


// Slug Field in Sanity Studio:
// Sanity Studio me jab aap content add karte hain, slug field:

// Ek textbox ke roop me show hota hai.
// Aap manually value enter kar sakte hain, ya phir "Generate" button use karke title se slug banwa sakte hain.
// Example Screenshot Explanation:

// Title: My First Blog Post
// Slug Field: my-first-blog-post
// Sanity Slug Key Features:
// Automatic Slug Generation: Title se derive ho jata hai.
// Customizable: Aap manual slug bhi de sakte ho.
// Unique: Sanity automatically ensure karta hai ki slug unique ho.
// Iska main purpose SEO-friendly aur clean URLs provide karna hai.
        {
          title: 'ENTER UNIQ NAME ',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: (input: string) => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
          }
        },

//         Text ka use simple plain content ke liye hota hai, jo formatting ke bina stored hota hai.
// Blog ka use complex aur rich content ke liye hota hai, jisme formatting, headings, links, images waghera include hote hain.


// text
        {
          title: 'Description',
          name: 'description',
          type: 'text'
        }
      ],

     
     




    }