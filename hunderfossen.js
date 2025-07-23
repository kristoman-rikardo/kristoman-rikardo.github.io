// Dette er Dalai Solutions AS sin eiendom, på leie til Hunderfossen Familiepark AS. Bruk utover avtale er ikke tillat.    
let widgetDescription = " ";
let inputPlaceholder = " ";
let widgetStyleSheet = " ";
let browser_url = window.location.href;

 if (browser_url.includes('/en')) {
widgetDescription = "I'm a clever and harmless troll, but I'm still in training and might make small mistakes🧌";
inputPlaceholder = "Message...";
widgetStyleSheet = "https://kristoman-rikardo.github.io/buttonlabels/en.css";
} else if (browser_url.includes('/de/')) {
widgetDescription = "Ich bin ein schlaues und harmloses Troll, aber ich bin noch in der Ausbildung und kann deshalb kleine Fehler machen🧌";
inputPlaceholder = "Nachricht schreiben...";
widgetStyleSheet = "https://kristoman-rikardo.github.io/buttonlabels/de.css";
} else {
widgetDescription = "Jeg er et lurt og ufarlig troll, men jeg er fortsatt under opplæring og kan derfor gjøre små feil🧌";
inputPlaceholder = "Skriv melding...";
widgetStyleSheet = "https://kristoman-rikardo.github.io/buttonlabels/no.css";
}


// Last inn Chat-widget
let script = document.createElement("script");
  (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '680d18d40179ce004dd951bd' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          assistant:  {
            banner: { description: widgetDescription },
            inputPlaceholder: inputPlaceholder,
            stylesheet: widgetStyleSheet
          },
          launch: {
            event: { type: "launch", payload: { browser_url: window.location.href } }
      }
        });
      }
      v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');
