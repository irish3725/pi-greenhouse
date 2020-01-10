
import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../components/MyLayout';

export default () => {

  const router = useRouter();
   
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Markdown
          source={`
# pi-greenhouse

pi-greenhouse is raspberry pi controlled greenhouse with a webpage front end to display the current conditions as well as a histo    ry of the conditions in the greenhouse.
 
The intention of this project is to combine my passion for house plants and my passion for software development. I get to gain ex    perience with automation, web development, database management, and plant propogation at the same time.
 
## Current Progress
 
### Web Interface
- [x]   Complete Node.js tutorial at: https://nextjs.org/learn/basics/styling-components.
- [ ]   Create main page with temperature, humidity, fan, light, most recent image image.
- [ ]   Display README on about page.
- [ ]   Get data from database for statistics history.

### Greenhouse Automation
- [ ]   Temperature.
- [ ]   Humidity.
- [ ]   Toggle fan.
- [ ]   Toggle light.
- [ ]   Get regular (daily?) image.

### Database Backend
- [ ]   Determine length of time between readings.
- [ ]   Create table(s).
- [ ]   Determine lifespan of data and automatically remove old data.
      `}
        />
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown: a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }

        .markdown ul {
          list-style-type:none;
        }
      `}</style>
    </Layout>
  );
}

