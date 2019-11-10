import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h2>Gimme some of that spreadsheet love</h2>
    
    <p>I've put this together to experiment with pulling data from
      the google sheets API into the Gatbsy Graph and then rendering that into static site. </p>
    <p>First step has been getting it working and pulling that into a table. <a href ="/sheets/">Pretty easy!</a></p>
    <p>Next Step, I'm going to do the same but dynamically create new pages using the data - <strong>Done!</strong> I'm filtering top 5 results from the graph - not pretty but working <a href ="/one/">One</a>, <a href ="/two/">Two</a>, <a href ="/three/">Three</a>, <a href ="/four/">Four</a>, <a href ="/five/">Five</a></p>
    <p>Also want to play with hosting this on Netlify or similar and using a button in sheets to trigger a webhook for rebuild/deploy - <strong>Done! I am on a roll.</strong></p>
    <p>Next steps is probably start from scratch with a more useful dataset, maybe play with more of a component-y/blog style approach and put a little more effort into theming. I also might play with google form submissions to capture content and trigger build.</p>
      <div style={{ maxWidth: `400px`, margin: 'auto', marginBottom: `1.45rem`  }}>
      <Image />
    </div>
  
  </Layout>
)

export default IndexPage
