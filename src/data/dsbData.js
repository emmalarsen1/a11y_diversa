export const dsbData = {
  url: "https://www.dsb.dk/",
  tags: ["wcag21a", "wcag21aa", "best-practice"],
  timestamp: "2024-04-18T15:05:47.270Z",
  screenshot: {
    url: "https://zlcbju3wpw3i8cmg.public.blob.vercel-storage.com/axe/dsb_dk/page-YxfmoOevQVMAv3dVmqSCvTrp0xzEhQ.webp",
    width: 1440,
    height: 960,
  },
  violations: [
    {
      id: "landmark-one-main",
      impact: "moderate",
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the document has a main landmark",
      help: "Document should have one main landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-one-main?application=axe-puppeteer",
      nodes: [
        {
          any: [],
          all: [
            {
              id: "page-has-main",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Document does not have a main landmark",
            },
          ],
          none: [],
          impact: "moderate",
          html: '<html class="js no-flash svg notification flexbox placeholder cssanimations texttrackapi track inputsearchevent checked csstransitions svgclippaths inlinesvg opacity target supports csstransforms3d no-time no-contains noScroll" lang="da" style="">',
          target: ["html"],
          failureSummary: "Fix all of the following:\n  Document does not have a main landmark",
        },
      ],
    },
    {
      id: "region",
      impact: "moderate",
      tags: ["cat.keyboard", "best-practice"],
      description: "Ensures all page content is contained by landmarks",
      help: "All page content should be contained by landmarks",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/region?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Some page content is not contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: '<h1 class="deck__title">Find rejse og pris i Danmark</h1>',
          target: [".deck__title"],
          failureSummary: "Fix any of the following:\n  Some page content is not contained by landmarks",
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Some page content is not contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: '<div class="form-label"><label class="" for="DepartLocation1">Fra</label></div>',
          target: [".search-box__from > div > .form-field--text.form-field > .form-label"],
          failureSummary: "Fix any of the following:\n  Some page content is not contained by landmarks",
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Some page content is not contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: '<div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-DepartLocation" aria-expanded="false">',
          target: ['.search-box__from > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"]'],
          failureSummary: "Fix any of the following:\n  Some page content is not contained by landmarks",
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Some page content is not contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: '<div class="form-label"><label class="" for="ArriveLocation2">Til</label></div>',
          target: [".search-box__to > div > .form-field--text.form-field > .form-label"],
          failureSummary: "Fix any of the following:\n  Some page content is not contained by landmarks",
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Some page content is not contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: '<div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-ArriveLocation" aria-expanded="false">',
          target: ['.search-box__to > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"]'],
          failureSummary: "Fix any of the following:\n  Some page content is not contained by landmarks",
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Some page content is not contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: '<section class="grid-container">',
          target: [".grid-container"],
          failureSummary: "Fix any of the following:\n  Some page content is not contained by landmarks",
        },
      ],
    },
    {
      id: "tabindex",
      impact: "serious",
      tags: ["cat.keyboard", "best-practice"],
      description: "Ensures tabindex attribute values are not greater than 0",
      help: "Elements should not have tabindex greater than zero",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/tabindex?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "tabindex",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Element has a tabindex greater than 0",
            },
          ],
          all: [],
          none: [],
          impact: "serious",
          html: '<input name="criteria[0].DepartLocation.Name" type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-DepartLocation" placeholder="Station / stoppested / vej / by / lokalitet" tabindex="1" value="">',
          target: ['.search-box__from > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"] > .form-input--text.form-input > input[aria-autocomplete="list"][autocomplete="off"][value=""]'],
          failureSummary: "Fix any of the following:\n  Element has a tabindex greater than 0",
        },
        {
          any: [
            {
              id: "tabindex",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Element has a tabindex greater than 0",
            },
          ],
          all: [],
          none: [],
          impact: "serious",
          html: '<input name="criteria[0].ArriveLocation.Name" type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-ArriveLocation" placeholder="Station / stoppested / vej / by / lokalitet" tabindex="2" value="">',
          target: ['.search-box__to > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"] > .form-input--text.form-input > input[aria-autocomplete="list"][autocomplete="off"][value=""]'],
          failureSummary: "Fix any of the following:\n  Element has a tabindex greater than 0",
        },
      ],
    },
  ],
  passes: [
    {
      id: "aria-allowed-role",
      impact: null,
      tags: ["cat.aria", "best-practice"],
      description: "Ensures role attribute has an appropriate value for the element",
      help: "ARIA role should be appropriate for the element",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/aria-allowed-role?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "aria-allowed-role",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "ARIA role is allowed for given element",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="overlay overlay-spinner " role="status"><div class="content-container"><span class="spinner"></span><p></p></div></div>',
          target: [".overlay"],
        },
        {
          any: [
            {
              id: "aria-allowed-role",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "ARIA role is allowed for given element",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a data-switch-screen="gigya-email-code-forgot-password-screen" class="gigya-forgotPassword gigya-composite-control" data-binding="true" data-translation-key="LINK_146308315993881860_LABEL" data-screenset-element-id="__gig_template_element_12_1713452745854" data-screenset-element-id-publish="false" data-screenset-roles="template,template,instance,instance,instance" tabindex="0" href="javascript:void(0)" role="button" title="Glemt adgangskode?">',
          target: ['a[href="javascript:void(0)"]'],
        },
        {
          any: [
            {
              id: "aria-allowed-role",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "ARIA role is allowed for given element",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-DepartLocation" aria-expanded="false">',
          target: ['.search-box__from > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"]'],
        },
        {
          any: [
            {
              id: "aria-allowed-role",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "ARIA role is allowed for given element",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="react-autowhatever-DepartLocation" role="listbox"></div>',
          target: ["#react-autowhatever-DepartLocation"],
        },
        {
          any: [
            {
              id: "aria-allowed-role",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "ARIA role is allowed for given element",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-ArriveLocation" aria-expanded="false">',
          target: ['.search-box__to > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"]'],
        },
        {
          any: [
            {
              id: "aria-allowed-role",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "ARIA role is allowed for given element",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="react-autowhatever-ArriveLocation" role="listbox"></div>',
          target: ["#react-autowhatever-ArriveLocation"],
        },
        {
          any: [
            {
              id: "aria-allowed-role",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "ARIA role is allowed for given element",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-SearchTime" aria-expanded="false">',
          target: ['div[aria-owns="react-autowhatever-SearchTime"]'],
        },
        {
          any: [
            {
              id: "aria-allowed-role",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "ARIA role is allowed for given element",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="react-autowhatever-SearchTime" role="listbox"></div>',
          target: ["#react-autowhatever-SearchTime"],
        },
      ],
    },
    {
      id: "autocomplete-valid",
      impact: null,
      tags: ["cat.forms", "wcag21aa", "wcag135", "EN-301-549", "EN-9.1.3.5", "ACT"],
      description: "Ensure the autocomplete attribute is correct and suitable for the form field",
      help: "autocomplete attribute must be used correctly",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/autocomplete-valid?application=axe-puppeteer",
      nodes: [
        {
          any: [],
          all: [
            {
              id: "autocomplete-valid",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "the autocomplete attribute is correctly formatted",
            },
          ],
          none: [],
          impact: null,
          html: '<input name="criteria[0].DepartLocation.Name" type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-DepartLocation" placeholder="Station / stoppested / vej / by / lokalitet" tabindex="1" value="">',
          target: ['.search-box__from > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"] > .form-input--text.form-input > input[aria-autocomplete="list"][autocomplete="off"][value=""]'],
        },
        {
          any: [],
          all: [
            {
              id: "autocomplete-valid",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "the autocomplete attribute is correctly formatted",
            },
          ],
          none: [],
          impact: null,
          html: '<input name="criteria[0].ArriveLocation.Name" type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-ArriveLocation" placeholder="Station / stoppested / vej / by / lokalitet" tabindex="2" value="">',
          target: ['.search-box__to > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"] > .form-input--text.form-input > input[aria-autocomplete="list"][autocomplete="off"][value=""]'],
        },
      ],
    },
    {
      id: "avoid-inline-spacing",
      impact: null,
      tags: ["cat.structure", "wcag21aa", "wcag1412", "EN-301-549", "EN-9.1.4.12", "ACT"],
      description: "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
      help: "Inline text spacing must be adjustable with custom stylesheets",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/avoid-inline-spacing?application=axe-puppeteer",
      nodes: [
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<html class="js no-flash svg notification flexbox placeholder cssanimations texttrackapi track inputsearchevent checked csstransitions svgclippaths inlinesvg opacity target supports csstransforms3d no-time no-contains noScroll" lang="da" style="">',
          target: ["html"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<section class="deck deck--with-bg force-height top-campaign--align-middle" style="background-image: url(/globalassets/forside/top/dsb-bg_1600x800.jpg)">',
          target: [".deck"],
        },
      ],
    },
    {
      id: "empty-heading",
      impact: null,
      tags: ["cat.name-role-value", "best-practice"],
      description: "Ensures headings have discernible text",
      help: "Headings should not be empty",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/empty-heading?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h1 class="deck__title">Find rejse og pris i Danmark</h1>',
          target: [".deck__title"],
        },
      ],
    },
    {
      id: "heading-order",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the order of headings is semantically correct",
      help: "Heading levels should only increase by one",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/heading-order?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "heading-order",
              data: {
                headingOrder: [
                  {
                    ancestry: ["html > body > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div > section:nth-child(3) > div > div:nth-child(1) > h1:nth-child(1)"],
                    level: 1,
                  },
                ],
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h1 class="deck__title">Find rejse og pris i Danmark</h1>',
          target: [".deck__title"],
        },
      ],
    },
    {
      id: "image-redundant-alt",
      impact: null,
      tags: ["cat.text-alternatives", "best-practice"],
      description: "Ensure image alternative is not repeated as text",
      help: "Alternative text of images should not be repeated as text",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/image-redundant-alt?application=axe-puppeteer",
      nodes: [
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/globalassets/forside/link/check-ind---tiles.jpg" title="Check Ind med DSB App" alt="Check Ind med DSB App">',
          target: ['img[alt="Check Ind med DSB App"]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/globalassets/forside/link/pendlertjek_440x280.jpg" title="Pendlertjek - se om et pendlerkort betaler sig for dig" alt="Pendlertjek - se om et pendlerkort betaler sig for dig">',
          target: ['a[href$="pendlertjek.dsb.dk/"] > .visual-link__zoomin-effect > .visual-link__image > img'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/globalassets/forside/link/erhverv_tile_440x280.jpg" title="Opret en gratis Erhvervsaftale" alt="Opret en gratis Erhvervsaftale">',
          target: ['img[alt="Opret en gratis Erhvervsaftale"]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/globalassets/forside/top/baeredygtighed_440x280.jpg" title="Når du tager toget frem for bilen, udleder du fire gange mindre CO2" alt="Når du tager toget frem for bilen, udleder du fire gange mindre CO2">',
          target: ['.visual-link[href$="baredygtighed/"][target="_self"] > .visual-link__zoomin-effect > .visual-link__image > img'],
        },
      ],
    },
    {
      id: "label-title-only",
      impact: null,
      tags: ["cat.forms", "best-practice"],
      description: "Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
      help: "Form elements should have a visible label",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/label-title-only?application=axe-puppeteer",
      nodes: [
        {
          any: [],
          all: [],
          none: [
            {
              id: "title-only",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Form element does not solely use title attribute for its label",
            },
          ],
          impact: null,
          html: '<input name="criteria[0].DepartLocation.Name" type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-DepartLocation" placeholder="Station / stoppested / vej / by / lokalitet" tabindex="1" value="">',
          target: ['.search-box__from > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"] > .form-input--text.form-input > input[aria-autocomplete="list"][autocomplete="off"][value=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "title-only",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Form element does not solely use title attribute for its label",
            },
          ],
          impact: null,
          html: '<input name="criteria[0].ArriveLocation.Name" type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-ArriveLocation" placeholder="Station / stoppested / vej / by / lokalitet" tabindex="2" value="">',
          target: ['.search-box__to > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"] > .form-input--text.form-input > input[aria-autocomplete="list"][autocomplete="off"][value=""]'],
        },
      ],
    },
    {
      id: "landmark-banner-is-top-level",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the banner landmark is at top level",
      help: "Banner landmark should not be contained in another landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-banner-is-top-level?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "landmark-is-top-level",
              data: {
                role: "banner",
              },
              relatedNodes: [],
              impact: "moderate",
              message: "The banner landmark is at the top level.",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<header class="page-header">',
          target: ["header"],
        },
      ],
    },
    {
      id: "landmark-contentinfo-is-top-level",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the contentinfo landmark is at top level",
      help: "Contentinfo landmark should not be contained in another landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-contentinfo-is-top-level?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "landmark-is-top-level",
              data: {
                role: "contentinfo",
              },
              relatedNodes: [],
              impact: "moderate",
              message: "The contentinfo landmark is at the top level.",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<footer class="page-footer">',
          target: ["footer"],
        },
      ],
    },
    {
      id: "landmark-no-duplicate-banner",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the document has at most one banner landmark",
      help: "Document should not have more than one banner landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-no-duplicate-banner?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "page-no-duplicate-banner",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Document does not have more than one banner landmark",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<header class="page-header">',
          target: ["header"],
        },
      ],
    },
    {
      id: "landmark-no-duplicate-contentinfo",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the document has at most one contentinfo landmark",
      help: "Document should not have more than one contentinfo landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-no-duplicate-contentinfo?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "page-no-duplicate-contentinfo",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Document does not have more than one contentinfo landmark",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<footer class="page-footer">',
          target: ["footer"],
        },
      ],
    },
    {
      id: "landmark-unique",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      help: "Ensures landmarks are unique",
      description: "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-unique?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "landmark-is-unique",
              data: {
                role: "banner",
                accessibleText: null,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<header class="page-header">',
          target: ["header"],
        },
        {
          any: [
            {
              id: "landmark-is-unique",
              data: {
                role: "navigation",
                accessibleText: null,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<nav class="main-shortcuts main-shortcuts4">',
          target: [".main-shortcuts"],
        },
        {
          any: [
            {
              id: "landmark-is-unique",
              data: {
                role: "contentinfo",
                accessibleText: null,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<footer class="page-footer">',
          target: ["footer"],
        },
      ],
    },
    {
      id: "meta-viewport-large",
      impact: null,
      tags: ["cat.sensory-and-visual-cues", "best-practice"],
      description: 'Ensures <meta name="viewport"> can scale a significant amount',
      help: "Users should be able to zoom and scale the text up to 500%",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/meta-viewport-large?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "meta-viewport-large",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "<meta> tag does not prevent significant zooming on mobile devices",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">',
          target: ['meta[name="viewport"]'],
        },
      ],
    },
    {
      id: "page-has-heading-one",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensure that the page, or at least one of its frames contains a level-one heading",
      help: "Page should contain a level-one heading",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/page-has-heading-one?application=axe-puppeteer",
      nodes: [
        {
          any: [],
          all: [
            {
              id: "page-has-heading-one",
              data: null,
              relatedNodes: [
                {
                  html: '<h1 class="deck__title">Find rejse og pris i Danmark</h1>',
                  target: [".deck__title"],
                },
              ],
              impact: "moderate",
              message: "Page has at least one level-one heading",
            },
          ],
          none: [],
          impact: null,
          html: '<html class="js no-flash svg notification flexbox placeholder cssanimations texttrackapi track inputsearchevent checked csstransitions svgclippaths inlinesvg opacity target supports csstransforms3d no-time no-contains noScroll" lang="da" style="">',
          target: ["html"],
        },
      ],
    },
    {
      id: "region",
      impact: "moderate",
      tags: ["cat.keyboard", "best-practice"],
      description: "Ensures all page content is contained by landmarks",
      help: "All page content should be contained by landmarks",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/region?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="page">',
          target: [".page"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<header class="page-header">',
          target: ["header"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="container">',
          target: ["header > .container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="page-header__buttons">',
          target: [".page-header__buttons"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="#" class="page-header__toggle-nav" data-flyout="page-nav">\n                <span>Menu</span>\n            </a>',
          target: [".page-header__toggle-nav"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<span>Menu</span>",
          target: [".page-header__toggle-nav > span"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="#" class="page-header__toggle-search" data-flyout="page-search">\n                <span>Søg</span>\n            </a>',
          target: [".page-header__toggle-search"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<span>Søg</span>",
          target: [".page-header__toggle-search > span"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="#" class="page-header__toggle-login" data-flyout="page-login">\n                <span id="js-ciam-login-menu-item__mount" data-caption="Log ind"><span>Log ind</span></span>\n            </a>',
          target: [".page-header__toggle-login"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span id="js-ciam-login-menu-item__mount" data-caption="Log ind"><span>Log ind</span></span>',
          target: ["#js-ciam-login-menu-item__mount"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<span>Log ind</span>",
          target: ["#js-ciam-login-menu-item__mount > span"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="page-header__logotype">\n            <a href="/">DSB</a>\n        </div>',
          target: [".page-header__logotype"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/">DSB</a>',
          target: ['.page-header__logotype > a[href="/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="content">',
          target: [".content"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<div>",
          target: [".content > div"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<div>",
          target: [".content > div > div"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<section class="deck deck--with-bg force-height top-campaign--align-middle" style="background-image: url(/globalassets/forside/top/dsb-bg_1600x800.jpg)">',
          target: [".deck"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="search-box-container container">',
          target: [".search-box-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="search-box travel-search__desktop">',
          target: [".search-box"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="search-box-body">',
          target: [".search-box-body"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<form action="https://www.dsb.dk/netbutik/resultat/" method="post" id="SearchForm">',
          target: ["#SearchForm"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="js-travel-search__mount">',
          target: ["#js-travel-search__mount"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="search-box__controls">',
          target: [".search-box__controls"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="search-box__panel">',
          target: [".search-box__panel"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="search-box__top">',
          target: [".search-box__top"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="search-box__flex">',
          target: [".search-box__top > .search-box__flex"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="search-box__item search-box__from">',
          target: [".search-box__from"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<div>",
          target: [".search-box__from > div"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="form-field form-field--text">',
          target: [".search-box__from > div > .form-field--text.form-field"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<label class="" for="DepartLocation1">Fra</label>',
          target: ['label[for="DepartLocation1"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="form-inputs form-inputs--clear">',
          target: [".search-box__from > div > .form-field--text.form-field > .form-inputs--clear.form-inputs"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="form-input form-input--text"><input name="criteria[0].DepartLocation.Name" type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-DepartLocation" placeholder="Station / stoppested / vej / by / lokalitet" tabindex="1" value=""></div>',
          target: ['.search-box__from > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"] > .form-input--text.form-input'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<input name="criteria[0].DepartLocation.Name" type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-DepartLocation" placeholder="Station / stoppested / vej / by / lokalitet" tabindex="1" value="">',
          target: ['.search-box__from > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"] > .form-input--text.form-input > input[aria-autocomplete="list"][autocomplete="off"][value=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="react-autowhatever-DepartLocation" role="listbox"></div>',
          target: ["#react-autowhatever-DepartLocation"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="form-input--clear" href="#"><svg class="svg-icon svg-icon--clear"><use xlink:href="/html/dist/svg/svg-sprite.svg#clear"></use></svg></a>',
          target: ['.search-box__from > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > .form-input--clear[href="#"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<svg class="svg-icon svg-icon--clear"><use xlink:href="/html/dist/svg/svg-sprite.svg#clear"></use></svg>',
          target: ['.search-box__from > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > .form-input--clear[href="#"] > .svg-icon--clear'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<use xlink:href="/html/dist/svg/svg-sprite.svg#clear"></use>',
          target: ['.search-box__from > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > .form-input--clear[href="#"] > .svg-icon--clear > use'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="search-box__item search-box__to">',
          target: [".search-box__to"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<div>",
          target: [".search-box__to > div"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="form-field form-field--text">',
          target: [".search-box__to > div > .form-field--text.form-field"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<label class="" for="ArriveLocation2">Til</label>',
          target: ['label[for="ArriveLocation2"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="form-inputs form-inputs--clear">',
          target: [".search-box__to > div > .form-field--text.form-field > .form-inputs--clear.form-inputs"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="form-input form-input--text"><input name="criteria[0].ArriveLocation.Name" type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-ArriveLocation" placeholder="Station / stoppested / vej / by / lokalitet" tabindex="2" value=""></div>',
          target: ['.search-box__to > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"] > .form-input--text.form-input'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<input name="criteria[0].ArriveLocation.Name" type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-ArriveLocation" placeholder="Station / stoppested / vej / by / lokalitet" tabindex="2" value="">',
          target: ['.search-box__to > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > div[role="combobox"][aria-haspopup="listbox"] > .form-input--text.form-input > input[aria-autocomplete="list"][autocomplete="off"][value=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="react-autowhatever-ArriveLocation" role="listbox"></div>',
          target: ["#react-autowhatever-ArriveLocation"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="form-input--clear" href="#"><svg class="svg-icon svg-icon--clear"><use xlink:href="/html/dist/svg/svg-sprite.svg#clear"></use></svg></a>',
          target: ['.search-box__to > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > .form-input--clear[href="#"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<svg class="svg-icon svg-icon--clear"><use xlink:href="/html/dist/svg/svg-sprite.svg#clear"></use></svg>',
          target: ['.search-box__to > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > .form-input--clear[href="#"] > .svg-icon--clear'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<use xlink:href="/html/dist/svg/svg-sprite.svg#clear"></use>',
          target: ['.search-box__to > div > .form-field--text.form-field > .form-inputs--clear.form-inputs > .form-input--clear[href="#"] > .svg-icon--clear > use'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<nav class="main-shortcuts main-shortcuts4">',
          target: [".main-shortcuts"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="container">',
          target: [".main-shortcuts > .container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="clearfix">',
          target: [".container > .clearfix"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                        <a href="/trafikinformation/" class="" title="" target="">\n                            Trafikinformation\n                        </a>\n                    </li>',
          target: [".clearfix > li:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/trafikinformation/" class="" title="" target="">\n                            Trafikinformation\n                        </a>',
          target: ['.clearfix > li:nth-child(1) > a[href$="trafikinformation/"][target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                        <a href="/kundeservice/" class="" title="" target="">\n                            Kundeservice og kontakt\n                        </a>\n                    </li>',
          target: [".clearfix > li:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/kundeservice/" class="" title="" target="">\n                            Kundeservice og kontakt\n                        </a>',
          target: ['li:nth-child(2) > a[href$="kundeservice/"][target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                        <a href="/find-produkter-og-services/" class="" title="" target="">\n                            Billetter og services\n                        </a>\n                    </li>',
          target: [".clearfix > li:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/" class="" title="" target="">\n                            Billetter og services\n                        </a>',
          target: ['li:nth-child(3) > a[href="/find-produkter-og-services/"][target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                        <a href="/find-produkter-og-services/dsb-udland/" class="" title="" target="_top">\n                            Billetter til udlandet\n                        </a>\n                    </li>',
          target: [".clearfix > li:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/dsb-udland/" class="" title="" target="_top">\n                            Billetter til udlandet\n                        </a>',
          target: ['a[target="_top"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="container">',
          target: [".grid-container > .container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<div>",
          target: [".grid-container > .container > div"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="inline-item  eec-promo" data-eec-id="check-ind-med-dsb-app" data-eec-name="Check Ind med DSB App" data-eec-creative="homepage grid boxes" data-eec-position="1">',
          target: ['div[data-eec-id="check-ind-med-dsb-app"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/check-ind/" target="_self" class="visual-link" title="Check Ind med DSB App">',
          target: ['.visual-link[title="Check Ind med DSB App"][target="_self"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__zoomin-effect">\n            <div class="visual-link__image">\n                <img src="/globalassets/forside/link/check-ind---tiles.jpg" title="Check Ind med DSB App" alt="Check Ind med DSB App">\n            </div>\n        </div>',
          target: ['.visual-link[title="Check Ind med DSB App"][target="_self"] > .visual-link__zoomin-effect'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__image">\n                <img src="/globalassets/forside/link/check-ind---tiles.jpg" title="Check Ind med DSB App" alt="Check Ind med DSB App">\n            </div>',
          target: ['.visual-link[title="Check Ind med DSB App"][target="_self"] > .visual-link__zoomin-effect > .visual-link__image'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/globalassets/forside/link/check-ind---tiles.jpg" title="Check Ind med DSB App" alt="Check Ind med DSB App">',
          target: ['img[alt="Check Ind med DSB App"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__text-container">',
          target: ['.visual-link[title="Check Ind med DSB App"][target="_self"] > .visual-link__text-container'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__text">\n\n                <p>Check ind er en ny funktion i DSB App. Du checker ind og ud med et swipe, prisen er ofte kun det samme som ved rejser på et personligt rejsekort.&nbsp;</p>\n\n            </div>',
          target: ['.visual-link[title="Check Ind med DSB App"][target="_self"] > .visual-link__text-container > .visual-link__text'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Check ind er en ny funktion i DSB App. Du checker ind og ud med et swipe, prisen er ofte kun det samme som ved rejser på et personligt rejsekort.&nbsp;</p>",
          target: ['.visual-link[title="Check Ind med DSB App"][target="_self"] > .visual-link__text-container > .visual-link__text > p'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__link">\n\n\n        </div>',
          target: ['.visual-link[title="Check Ind med DSB App"][target="_self"] > .visual-link__text-container > .visual-link__link'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="inline-item  eec-promo" data-eec-id="pendlertjek---se-om-et-pendlerkort-betaler-sig-for-dig" data-eec-name="Pendlertjek - se om et pendlerkort betaler sig for dig" data-eec-creative="homepage grid boxes" data-eec-position="2">',
          target: ['div[data-eec-position="2"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://pendlertjek.dsb.dk/" target="_self" class="visual-link" title="Pendlertjek - se om et pendlerkort betaler sig for dig">',
          target: ['a[href$="pendlertjek.dsb.dk/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__zoomin-effect">',
          target: ['a[href$="pendlertjek.dsb.dk/"] > .visual-link__zoomin-effect'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__image">\n                <img src="/globalassets/forside/link/pendlertjek_440x280.jpg" title="Pendlertjek - se om et pendlerkort betaler sig for dig" alt="Pendlertjek - se om et pendlerkort betaler sig for dig">\n            </div>',
          target: ['a[href$="pendlertjek.dsb.dk/"] > .visual-link__zoomin-effect > .visual-link__image'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/globalassets/forside/link/pendlertjek_440x280.jpg" title="Pendlertjek - se om et pendlerkort betaler sig for dig" alt="Pendlertjek - se om et pendlerkort betaler sig for dig">',
          target: ['a[href$="pendlertjek.dsb.dk/"] > .visual-link__zoomin-effect > .visual-link__image > img'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__text-container">',
          target: ['a[href$="pendlertjek.dsb.dk/"] > .visual-link__text-container'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__text">\n\n                <p><span>Selv hvis du bare skal på arbejde et par gange om ugen, er der måske både tid og penge at spare på turen frem og tilbage. Tag et Pendlertjek, og se om et pendlerkort kan betale sig for dig.</span></p>\n\n            </div>',
          target: ['a[href$="pendlertjek.dsb.dk/"] > .visual-link__text-container > .visual-link__text'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p><span>Selv hvis du bare skal på arbejde et par gange om ugen, er der måske både tid og penge at spare på turen frem og tilbage. Tag et Pendlertjek, og se om et pendlerkort kan betale sig for dig.</span></p>",
          target: ['a[href$="pendlertjek.dsb.dk/"] > .visual-link__text-container > .visual-link__text > p'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<span>Selv hvis du bare skal på arbejde et par gange om ugen, er der måske både tid og penge at spare på turen frem og tilbage. Tag et Pendlertjek, og se om et pendlerkort kan betale sig for dig.</span>",
          target: ['a[href$="pendlertjek.dsb.dk/"] > .visual-link__text-container > .visual-link__text > p > span'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__link">\n\n\n        </div>',
          target: ['a[href$="pendlertjek.dsb.dk/"] > .visual-link__text-container > .visual-link__link'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="inline-item  eec-promo" data-eec-id="opret-en-gratis-erhvervsaftale" data-eec-name="Opret en gratis Erhvervsaftale" data-eec-creative="homepage grid boxes" data-eec-position="3">',
          target: ['div[data-eec-id="opret-en-gratis-erhvervsaftale"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/dsb-erhverv/" target="_self" class="visual-link" title="Opret en gratis Erhvervsaftale">',
          target: ['.visual-link[title="Opret en gratis Erhvervsaftale"][href$="dsb-erhverv/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__zoomin-effect">\n            <div class="visual-link__image">\n                <img src="/globalassets/forside/link/erhverv_tile_440x280.jpg" title="Opret en gratis Erhvervsaftale" alt="Opret en gratis Erhvervsaftale">\n            </div>\n        </div>',
          target: ['.visual-link[title="Opret en gratis Erhvervsaftale"][href$="dsb-erhverv/"] > .visual-link__zoomin-effect'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__image">\n                <img src="/globalassets/forside/link/erhverv_tile_440x280.jpg" title="Opret en gratis Erhvervsaftale" alt="Opret en gratis Erhvervsaftale">\n            </div>',
          target: ['.visual-link[title="Opret en gratis Erhvervsaftale"][href$="dsb-erhverv/"] > .visual-link__zoomin-effect > .visual-link__image'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/globalassets/forside/link/erhverv_tile_440x280.jpg" title="Opret en gratis Erhvervsaftale" alt="Opret en gratis Erhvervsaftale">',
          target: ['img[alt="Opret en gratis Erhvervsaftale"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__text-container">',
          target: ['.visual-link[title="Opret en gratis Erhvervsaftale"][href$="dsb-erhverv/"] > .visual-link__text-container'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__text">\n\n                <p><span>Opret en gratis Erhvervsaftale og spar 20% på Standardbilletter og DSB 1’ over Storebælt, samt op til 50% på et Erhvervskort.</span></p>\n\n            </div>',
          target: ['.visual-link[title="Opret en gratis Erhvervsaftale"][href$="dsb-erhverv/"] > .visual-link__text-container > .visual-link__text'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p><span>Opret en gratis Erhvervsaftale og spar 20% på Standardbilletter og DSB 1’ over Storebælt, samt op til 50% på et Erhvervskort.</span></p>",
          target: ['.visual-link[title="Opret en gratis Erhvervsaftale"][href$="dsb-erhverv/"] > .visual-link__text-container > .visual-link__text > p'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<span>Opret en gratis Erhvervsaftale og spar 20% på Standardbilletter og DSB 1’ over Storebælt, samt op til 50% på et Erhvervskort.</span>",
          target: ['.visual-link[title="Opret en gratis Erhvervsaftale"][href$="dsb-erhverv/"] > .visual-link__text-container > .visual-link__text > p > span'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__link">\n\n\n        </div>',
          target: ['.visual-link[title="Opret en gratis Erhvervsaftale"][href$="dsb-erhverv/"] > .visual-link__text-container > .visual-link__link'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="inline-item  eec-promo" data-eec-id="når-du-tager-toget-frem-for-bilen,-udleder-du-fire-gange-mindre-co2" data-eec-name="Når du tager toget frem for bilen, udleder du fire gange mindre CO2" data-eec-creative="homepage grid boxes" data-eec-position="4">',
          target: ['div[data-eec-position="4"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-dsb/baredygtighed/" target="_self" class="visual-link" title="Når du tager toget frem for bilen, udleder du fire gange mindre CO2">',
          target: ['.visual-link[href$="baredygtighed/"][target="_self"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__zoomin-effect">',
          target: ['.visual-link[href$="baredygtighed/"][target="_self"] > .visual-link__zoomin-effect'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__image">\n                <img src="/globalassets/forside/top/baeredygtighed_440x280.jpg" title="Når du tager toget frem for bilen, udleder du fire gange mindre CO2" alt="Når du tager toget frem for bilen, udleder du fire gange mindre CO2">\n            </div>',
          target: ['.visual-link[href$="baredygtighed/"][target="_self"] > .visual-link__zoomin-effect > .visual-link__image'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/globalassets/forside/top/baeredygtighed_440x280.jpg" title="Når du tager toget frem for bilen, udleder du fire gange mindre CO2" alt="Når du tager toget frem for bilen, udleder du fire gange mindre CO2">',
          target: ['.visual-link[href$="baredygtighed/"][target="_self"] > .visual-link__zoomin-effect > .visual-link__image > img'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__text-container">',
          target: ['.visual-link[href$="baredygtighed/"][target="_self"] > .visual-link__text-container'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__text">\n\n                <p>Vi har plads til alle, og sammen kan vi gøre Danmark grønnere og fri for trængsel på vejene. I toget kan du bruge tiden til det, du har lyst til, mens vi arbejder på at gøre rejsen endnu grønnere.</p>\n\n            </div>',
          target: ['.visual-link[href$="baredygtighed/"][target="_self"] > .visual-link__text-container > .visual-link__text'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Vi har plads til alle, og sammen kan vi gøre Danmark grønnere og fri for trængsel på vejene. I toget kan du bruge tiden til det, du har lyst til, mens vi arbejder på at gøre rejsen endnu grønnere.</p>",
          target: ['.visual-link[href$="baredygtighed/"][target="_self"] > .visual-link__text-container > .visual-link__text > p'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="visual-link__link">\n\n\n        </div>',
          target: ['.visual-link[href$="baredygtighed/"][target="_self"] > .visual-link__text-container > .visual-link__link'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<footer class="page-footer">',
          target: ["footer"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="page-footer__top">',
          target: [".page-footer__top"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="container">',
          target: [".page-footer__top > .container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="page-footer__top-inner">',
          target: [".page-footer__top-inner"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="nav nav--primary">',
          target: [".page-footer__top-inner > .nav--primary.nav:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="nav__title"></div>',
          target: [".nav--primary.nav:nth-child(1) > .nav__title"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<ul>",
          target: [".page-footer__top-inner > .nav--primary.nav:nth-child(1) > ul"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/" class="" title="" target="">\n                                                Find rejse og pris\n                                            </a>\n                                        </li>',
          target: [".page-footer__top-inner > .nav--primary.nav:nth-child(1) > ul > li:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/" class="" title="" target="">\n                                                Find rejse og pris\n                                            </a>',
          target: ['a[href="/"][target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/om-dsb/ud--se/" class="" title="" target="">\n                                                Læs "Ud &amp; Se"\n                                            </a>\n                                        </li>',
          target: [".page-footer__top-inner > .nav--primary.nav:nth-child(1) > ul > li:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-dsb/ud--se/" class="" title="" target="">\n                                                Læs "Ud &amp; Se"\n                                            </a>',
          target: ['a[href$="ud--se/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/dsb-plus/" class="" title="" target="">\n                                                DSB Plus\n                                            </a>\n                                        </li>',
          target: [".page-footer__top-inner > .nav--primary.nav:nth-child(1) > ul > li:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/dsb-plus/" class="" title="" target="">\n                                                DSB Plus\n                                            </a>',
          target: ['a[href$="dsb-plus/"][target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/dsb-erhverv/" class="" title="" target="">\n                                                Erhverv\n                                            </a>\n                                        </li>',
          target: [".page-footer__top-inner > .nav--primary.nav:nth-child(1) > ul > li:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/dsb-erhverv/" class="" title="" target="">\n                                                Erhverv\n                                            </a>',
          target: ['a[href$="dsb-erhverv/"][target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/kundeservice/" class="" title="" target="">\n                                                Kundeservice og kontakt\n                                            </a>\n                                        </li>',
          target: [".page-footer__top-inner > .nav--primary.nav:nth-child(1) > ul > li:nth-child(5)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/kundeservice/" class="" title="" target="">\n                                                Kundeservice og kontakt\n                                            </a>',
          target: ['li:nth-child(5) > a[href$="kundeservice/"][target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<li>",
          target: [".nav--primary.nav:nth-child(1) > ul > li:nth-child(6)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://www.findsmiley.dk/Sider/Search.aspx?k=25050053" class="" title="" target="">\n                                                Smiley-rapporter DSB\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(1) > ul > li:nth-child(6) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<li>",
          target: [".nav--primary.nav:nth-child(1) > ul > li:nth-child(7)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://www.findsmiley.dk/Sider/VirkSide.aspx?virk=1201293" class="" title="" target="">\n                                                Smiley-rapporter S&amp;R catering\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(1) > ul > li:nth-child(7) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="nav nav--primary">',
          target: [".page-footer__top-inner > .nav--primary.nav:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="nav__title">Billetter og services</div>',
          target: [".nav--primary.nav:nth-child(2) > .nav__title"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<ul>",
          target: [".page-footer__top-inner > .nav--primary.nav:nth-child(2) > ul"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/find-produkter-og-services/ung/ungdomskort/" class="" title="" target="">\n                                                Ungdomskort\n                                            </a>\n                                        </li>',
          target: [".page-footer__top-inner > .nav--primary.nav:nth-child(2) > ul > li:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/ung/ungdomskort/" class="" title="" target="">\n                                                Ungdomskort\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(2) > ul > li:nth-child(1) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/find-produkter-og-services/rejsekort/" class="" title="" target="">\n                                                Rejsekort\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(2) > ul > li:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/rejsekort/" class="" title="" target="">\n                                                Rejsekort\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(2) > ul > li:nth-child(2) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/find-produkter-og-services/dsb-pendlerkort/" class="" title="" target="">\n                                                Pendler- og Periodekort\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(2) > ul > li:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/dsb-pendlerkort/" class="" title="" target="">\n                                                Pendler- og Periodekort\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(2) > ul > li:nth-child(3) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/find-produkter-og-services/Pendler20/" class="" title="" target="">\n                                                Pendler20\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(2) > ul > li:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/Pendler20/" class="" title="" target="">\n                                                Pendler20\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(2) > ul > li:nth-child(4) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/find-produkter-og-services/#2385" class="" title="" target="">\n                                                Enkelt- og returbilletter\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(2) > ul > li:nth-child(5)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/#2385" class="" title="" target="">\n                                                Enkelt- og returbilletter\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(2) > ul > li:nth-child(5) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/find-produkter-og-services/dsb-1-billetter/" class="" title="" target="">\n                                                DSB 1\'\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(2) > ul > li:nth-child(6)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/dsb-1-billetter/" class="" title="" target="">\n                                                DSB 1\'\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(2) > ul > li:nth-child(6) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/find-produkter-og-services/orange/" class="" title="" target="">\n                                                Orange\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(2) > ul > li:nth-child(7)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/orange/" class="" title="" target="">\n                                                Orange\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(2) > ul > li:nth-child(7) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/find-produkter-og-services/orange-fri/" class="" title="" target="">\n                                                Orange Fri\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(2) > ul > li:nth-child(8)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/orange-fri/" class="" title="" target="">\n                                                Orange Fri\n                                            </a>',
          target: ['li:nth-child(8) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/find-produkter-og-services/dsb-udland/" class="" title="" target="">\n                                                Rejser til udlandet\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(2) > ul > li:nth-child(9)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/dsb-udland/" class="" title="" target="">\n                                                Rejser til udlandet\n                                            </a>',
          target: ['li:nth-child(9) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/find-produkter-og-services/#2393" class="" title="" target="">\n                                                Rejser over Øresund\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(2) > ul > li:nth-child(10)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/#2393" class="" title="" target="">\n                                                Rejser over Øresund\n                                            </a>',
          target: ['li:nth-child(10) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/find-produkter-og-services/" class="" title="" target="">\n                                                Find billetter og services\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(2) > ul > li:nth-child(11)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/" class="" title="" target="">\n                                                Find billetter og services\n                                            </a>',
          target: ['li:nth-child(11) > a[href="/find-produkter-og-services/"][target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="nav nav--primary">',
          target: [".page-footer__top-inner > .nav--primary.nav:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="nav__title">Trafik</div>',
          target: [".nav--primary.nav:nth-child(3) > .nav__title"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<ul>",
          target: [".page-footer__top-inner > .nav--primary.nav:nth-child(3) > ul"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/trafikinformation/" class="" title="" target="">\n                                                Trafikinformation\n                                            </a>\n                                        </li>',
          target: [".page-footer__top-inner > .nav--primary.nav:nth-child(3) > ul > li:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/trafikinformation/" class="" title="" target="">\n                                                Trafikinformation\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(3) > ul > li:nth-child(1) > a[href$="trafikinformation/"][target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/trafikinformation/koereplaner/" class="" title="" target="">\n                                                Køreplaner\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(3) > ul > li:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/trafikinformation/koereplaner/" class="" title="" target="">\n                                                Køreplaner\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(3) > ul > li:nth-child(2) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/find-produkter-og-services/dsb-rejsetidsgaranti/" class="" title="" target="">\n                                                Rejsetidsgaranti\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(3) > ul > li:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/dsb-rejsetidsgaranti/" class="" title="" target="">\n                                                Rejsetidsgaranti\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(3) > ul > li:nth-child(3) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<li>",
          target: [".nav--primary.nav:nth-child(3) > ul > li:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/trafikinformation/andringer-i-trafik-og-drift/andringer-i-trafik-og-drift/" class="" title="" target="">\n                                                Ændringer i trafik og drift\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(3) > ul > li:nth-child(4) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/om-dsb/baredygtighed/samfundsansvar/sikkerhed/" class="" title="" target="">\n                                                Sikkerhed\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(3) > ul > li:nth-child(5)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-dsb/baredygtighed/samfundsansvar/sikkerhed/" class="" title="" target="">\n                                                Sikkerhed\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(3) > ul > li:nth-child(5) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="nav nav--primary">',
          target: [".nav--primary.nav:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="nav__title">Om DSB</div>',
          target: [".nav--primary.nav:nth-child(4) > .nav__title"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<ul>",
          target: [".nav--primary.nav:nth-child(4) > ul"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/om-dsb/karriere-i-dsb/" class="" title="" target="">\n                                                Karriere i DSB\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(4) > ul > li:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-dsb/karriere-i-dsb/" class="" title="" target="">\n                                                Karriere i DSB\n                                            </a>',
          target: ['a[href$="karriere-i-dsb/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/om-dsb/baredygtighed/" class="" title="" target="">\n                                                Bæredygtighed\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(4) > ul > li:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-dsb/baredygtighed/" class="" title="" target="">\n                                                Bæredygtighed\n                                            </a>',
          target: ['a[href$="baredygtighed/"][target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                            <a href="/om-dsb/" class="" title="" target="">\n                                                Om virksomheden\n                                            </a>\n                                        </li>',
          target: [".nav--primary.nav:nth-child(4) > ul > li:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-dsb/" class="" title="" target="">\n                                                Om virksomheden\n                                            </a>',
          target: ['a[href$="om-dsb/"][target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<li>",
          target: [".nav--primary.nav:nth-child(4) > ul > li:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-dsb/virksomheden/forretningsbetingelser/rejseregler/" class="" title="" target="">\n                                                Rejse- og ordensregler\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(4) > ul > li:nth-child(4) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<li>",
          target: [".nav--primary.nav:nth-child(4) > ul > li:nth-child(5)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/find-produkter-og-services/information-om-andringer/" class="" title="" target="">\n                                                Ændringer i kort og billetter\n                                            </a>',
          target: ['.nav--primary.nav:nth-child(4) > ul > li:nth-child(5) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="page-footer__bottom">',
          target: [".page-footer__bottom"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="container">',
          target: [".page-footer__bottom > .container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="nav nav--secondary">',
          target: [".container > .nav--secondary.nav"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<ul>",
          target: [".container > .nav--secondary.nav > ul"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                <a href="/en/" class="" title="" target="">In English</a>\n                            </li>',
          target: [".container > .nav--secondary.nav > ul > li:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/en/" class="" title="" target="">In English</a>',
          target: ['a[href$="en/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                <a href="/om-dsb/virksomheden/forretningsbetingelser/brug-af-cookies-pa-dsb.dk-og-dsbplus.dk/" class="" title="" target="">Cookies på dsb.dk</a>\n                            </li>',
          target: [".container > .nav--secondary.nav > ul > li:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-dsb/virksomheden/forretningsbetingelser/brug-af-cookies-pa-dsb.dk-og-dsbplus.dk/" class="" title="" target="">Cookies på dsb.dk</a>',
          target: ['.nav--secondary.nav > ul > li:nth-child(2) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                <a href="/om-dsb/virksomheden/forretningsbetingelser/persondata/" class="" title="" target="">Persondata</a>\n                            </li>',
          target: [".container > .nav--secondary.nav > ul > li:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-dsb/virksomheden/forretningsbetingelser/persondata/" class="" title="" target="">Persondata</a>',
          target: ['.nav--secondary.nav > ul > li:nth-child(3) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                <a href="/konfiguration/global-menu-root-page/primar-gruppe-2/tilgangelighedserklaring/" class="" title="" target="">Tilgængelighedserklæring dsb.dk</a>\n                            </li>',
          target: [".nav--secondary.nav > ul > li:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/konfiguration/global-menu-root-page/primar-gruppe-2/tilgangelighedserklaring/" class="" title="" target="">Tilgængelighedserklæring dsb.dk</a>',
          target: ['.nav--secondary.nav > ul > li:nth-child(4) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n                                <a href="https://www.was.digst.dk/app-dsb-app" class="" title="" target="">Tilgængelighedserklæring DSB App</a>\n                            </li>',
          target: [".nav--secondary.nav > ul > li:nth-child(5)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://www.was.digst.dk/app-dsb-app" class="" title="" target="">Tilgængelighedserklæring DSB App</a>',
          target: ['.nav--secondary.nav > ul > li:nth-child(5) > a[target=""][title=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="modals" class="modals">\n        <div class="modals__background">\n        </div>\n        \n    </div>',
          target: ["#modals"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="modals__background">\n        </div>',
          target: [".modals__background"],
        },
      ],
    },
  ],
  incomplete: [],
  inapplicable: [
    {
      id: "accesskeys",
      impact: null,
      tags: ["cat.keyboard", "best-practice"],
      description: "Ensures every accesskey attribute value is unique",
      help: "accesskey attribute value should be unique",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/accesskeys?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "aria-dialog-name",
      impact: null,
      tags: ["cat.aria", "best-practice"],
      description: "Ensures every ARIA dialog and alertdialog node has an accessible name",
      help: "ARIA dialog and alertdialog nodes should have an accessible name",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/aria-dialog-name?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "aria-text",
      impact: null,
      tags: ["cat.aria", "best-practice"],
      description: 'Ensures role="text" is used on elements with no focusable descendants',
      help: '"role=text" should have no focusable descendants',
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/aria-text?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "aria-treeitem-name",
      impact: null,
      tags: ["cat.aria", "best-practice"],
      description: "Ensures every ARIA treeitem node has an accessible name",
      help: "ARIA treeitem nodes should have an accessible name",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/aria-treeitem-name?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "empty-table-header",
      impact: null,
      tags: ["cat.name-role-value", "best-practice"],
      description: "Ensures table headers have discernible text",
      help: "Table header text should not be empty",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/empty-table-header?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "frame-tested",
      impact: null,
      tags: ["cat.structure", "best-practice", "review-item"],
      description: "Ensures <iframe> and <frame> elements contain the axe-core script",
      help: "Frames should be tested with axe-core",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/frame-tested?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "landmark-complementary-is-top-level",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the complementary landmark or aside is at top level",
      help: "Aside should not be contained in another landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-complementary-is-top-level?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "landmark-main-is-top-level",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the main landmark is at top level",
      help: "Main landmark should not be contained in another landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-main-is-top-level?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "landmark-no-duplicate-main",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the document has at most one main landmark",
      help: "Document should not have more than one main landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-no-duplicate-main?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "presentation-role-conflict",
      impact: null,
      tags: ["cat.aria", "best-practice", "ACT"],
      description: "Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",
      help: "Ensure elements marked as presentational are consistently ignored",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/presentation-role-conflict?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "scope-attr-valid",
      impact: null,
      tags: ["cat.tables", "best-practice"],
      description: "Ensures the scope attribute is used correctly on tables",
      help: "scope attribute should be used correctly",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/scope-attr-valid?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "skip-link",
      impact: null,
      tags: ["cat.keyboard", "best-practice"],
      description: "Ensure all skip links have a focusable target",
      help: "The skip-link target should exist and be focusable",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/skip-link?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "table-duplicate-name",
      impact: null,
      tags: ["cat.tables", "best-practice"],
      description: "Ensure the <caption> element does not contain the same text as the summary attribute",
      help: "tables should not have the same summary and caption",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/table-duplicate-name?application=axe-puppeteer",
      nodes: [],
    },
  ],
};
