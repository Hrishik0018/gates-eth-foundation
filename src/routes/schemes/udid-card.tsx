export interface Section {
  title: string;
  content: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PageContent {
  hero: {
    pageTitle: string;
    heroDescription: string;
  };
  sections: Section[];
  faq: FAQItem[];
  cta: {
    ctaHeadline: string;
    ctaDescription: string;
    buttonText: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    openGraphTitle: string;
    openGraphDescription: string;
  };
}

export const PAGE_CONTENT: PageContent = {
  hero: {
    pageTitle: "Step-by-Step UDID Card Guide for Autism and Special Needs in India: Securing Your Child's Rights",
    heroDescription: "The Unique Disability ID, or Swavlamban Card, is India's most critical official document for individuals with disabilities. Launched by the Department of Empowerment of Persons with Disabilities, the UDID standardizes cross-verification across all states, making old paper certificates obsolete. Project Jugnu clarifies the digital enrollment ecosystem, ensuring parents can confidently navigate the medical boards, compile compliant paperwork, and unlock their child's legally mandated government schemes and protections without systemic delays."
  },
  sections: [
    {
      title: "Prerequisites and Documentation Required for Online Swavlamban Registration",
      content: [
        "Before logging onto the central Swavlamban portal, collecting administratively precise documentation is critical to avoid system rejections. The digital registration engine requires specific file sizes and formats for clear database indexing.",
        "Secure a high-resolution, recent passport-sized color photograph of your child against a clear, light background. The file must be in JPEG or JPG format, sized strictly between 15 KB and 30 KB, ensuring the facial features are perfectly distinct for biometric matching.",
        "Obtain a clear digital scan of your child's signature or their distinct thumb impression. For younger children or individuals with severe fine-motor difficulties, a clear ink print of the left thumb is standard practice. This file must be a JPEG or JPG between 3 KB and 30 KB.",
        "Prepare an active Identity Proof doc such as the child's Aadhaar Card, Passport, or Voter ID. If using Aadhaar, ensure the name and date of birth match your medical logs precisely. Scan this as a PDF or JPEG document between 10 KB and 100 KB.",
        "Compile valid Address Proof documents. Acceptable options include the parents' Aadhaar card, a recent electricity bill, a registered rental agreement, or a ration card. The address provided determines the specific government district hospital assigned for your physical medical assessment.",
        "Locate your existing state-issued physical disability certificate if you have one. If you are applying for a fresh evaluation, you will select the 'New Application' track on the web portal. Existing certificates must be scanned as a PDF or JPEG between 10 KB and 100 KB.",
        "Verify that all scanned text files are fully legible. Blurred lines or clipped edges on identity documents are the leading causes of administrative backlog and verification failures at the local Social Welfare Office level."
      ]
    },
    {
      title: "Navigating the Portal: From Form Submission to the Hospital Medical Board",
      content: [
        "The digital application process moves through distinct administrative checkpoints. Understanding this sequence allows parents to monitor status tracking tools accurately and prepare their children for the required hospital visit.",
        "Visit the official Swavlamban Card web portal and select the 'Apply for Disability Certificate & UDID Card' link. This action initializes a four-part digital form covering personal data, employment status, disability details, and identity uploads.",
        "Complete the personal details section using the child's legal name as printed on their Aadhaar Card. Under the disability details dropdown, select the specific diagnosis — such as Autism Spectrum Disorder or Intellectual Disability — matching your clinical diagnosis papers.",
        "Submit the finalized digital form to generate your unique 17-digit Application Enrollment Number. Print out the complete submitted application acknowledgement page and save a digital copy immediately; this tracking code is required for all future status inquiries.",
        "Wait for the portal system or a local administrative SMS to assign your verification hospital. The portal routes your file to the nearest notified government medical institution based on your submitted residential pin code.",
        "Attend the physical medical board evaluation on your assigned date. Bring all original physical copies of identity proof, address proof, diagnostic assessments like the Indian Scale for Assessment of Autism (ISAA), and pediatric history files.",
        "During the hospital assessment, a specialized panel of government medical officers, including a clinical psychologist and a psychiatrist, will review your documentation and observe your child to certify the official percentage of benchmark disability."
      ]
    },
    {
      title: "Unlocking Benefits: Concessions, Schemes, and Protections Tied to Your UDID",
      content: [
        "Once issued, the UDID card functions as a powerful legal and economic instrument across India. It removes the stressful requirement of carrying bulky medical files to prove a disability to railway officials, transport authorities, or education boards.",
        "Access substantial travel concessions across Indian public infrastructure networks. The UDID grants verified cardholders up to a 75% reduction on Indian Railways fares in specific travel classes, along with dedicated concessions on state-run road transport corporation buses.",
        "Streamline the mandatory enrollment steps for the National Trust's Niramaya Health Insurance Scheme. A verified UDID card satisfies the central criteria for establishing disability status, enabling expedited annual health insurance processing.",
        "Claim mandatory educational accommodations under the Rights of Persons with Disabilities (RPwD) Act, 2016. Educational institutions use the UDID to officially authorize extra time during examinations, assign scribe assistance, and process accessible learning materials.",
        "Fulfill the compliance paperwork required to receive state-specific financial assistances, such as the monthly Divyangjan pension allowances distributed to families below specified income thresholds by individual state welfare departments.",
        "Present the card at public monuments, museums, and national parks to access waived admission fees and priority, barrier-free entry lanes designed to accommodate individuals with sensory processing differences and physical challenges.",
        "Maintain a backup digital copy of your unique 17-digit card number on secure cloud storage. While the physical plastic card is mailed directly to your registered home address, the digital e-UDID card can be downloaded instantly via the portal and carries equal legal validity."
      ]
    }
  ],
  faq: [
    {
      question: "How long does it typically take to receive the physical UDID card after the hospital medical evaluation?",
      answer: "The complete timeline generally spans between 30 to 90 days following a successful medical board evaluation. After the hospital specialists upload your child's Indian Scale for Assessment of Autism (ISAA) scores and certify the disability percentage online, the data goes to the local District Social Welfare Officer for final administrative approval. Once approved, the digital e-UDID card is generated instantly for online downloading, while the physical plastic card is printed centrally and delivered via India Post directly to your registered home address."
    },
    {
      question: "Can a UDID card issued in one Indian state be used to claim benefits and concessions in another state?",
      answer: "Yes, one of the primary legislative objectives of the central UDID project is complete pan-India validity. The card features a standard national format and database architecture, ensuring that a card officially certified in one state must be recognized by government bodies, transport corporations, and educational entities across all other states and union territories. However, specific financial welfare schemes, like localized state disability pensions, remain subject to individual state-level residency criteria and budget definitions."
    },
    {
      question: "What should we do if our child's UDID application is rejected or the certified percentage is lower than expected?",
      answer: "If your application faces administrative rejection due to mismatched documents or blurry file uploads, you can log back into the Swavlamban portal, correct the specific data errors highlighted by the verifier, and resubmit. If you disagree with the clinical disability percentage assigned by the hospital medical board, you hold the legal right to file an official appeal. This appeal must be submitted to the designated state-level Appellate Authority for disability certifications within 90 days of receiving the certificate."
    },
    {
      question: "Is the UDID card for autism permanent, or does it require periodic renewal assessments?",
      answer: "For neurodevelopmental conditions like autism evaluated during early childhood, medical boards typically issue a temporary certificate with a specified validity period—often 3 to 5 years. This timeline accounts for developmental changes, behavioral shifts, and therapeutic progress. The card clearly displays an expiry date. Parents must initiate an online renewal application through the Swavlamban portal within 3 months prior to that date, which will involve a scheduled re-evaluation at the designated government hospital."
    },
    {
      question: "Can I apply for a UDID card if my child only holds a diagnostic report from a private hospital?",
      answer: "You can absolutely use a private clinical diagnostic report as supporting evidence during your initial online portal registration. However, a private hospital report alone cannot bypass the mandatory government verification process. The legal framework dictates that the official disability percentage required for a UDID card must be assessed and validated online by an authorized medical board operating within a notified government district hospital or designated medical college."
    }
  ],
  cta: {
    ctaHeadline: "Simplify Your UDID Application Process with Expert Guidance",
    ctaDescription: "Navigating government portals and hospital medical boards can feel daunting when caring for a child with special needs. Project Jugnu has created a fully illustrated, plain-language PDF walkthrough of the entire Swavlamban registration screen sequence. Download our complete application kit today or connect with an accessibility volunteer to review your documents.",
    buttonText: "Download Step-by-Step UDID Application Kit"
  },
  seo: {
    metaTitle: "UDID Card for Autism India: Swavlamban Application Guide | Project Jugnu",
    metaDescription: "The authoritative step-by-step guide for Indian parents applying for an Autism UDID card. Learn registration prerequisites, hospital board procedures, and mandatory documents.",
    openGraphTitle: "How to Apply for a UDID Card for Autism in India: Complete Portal Guide",
    openGraphDescription: "Demystifying the Swavlamban portal for neurodivergent children. Get clear instructions on document specifications, medical board assessments, and pan-India government concessions."
  }
};