export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-real-time-gps-tracking-matters-for-school-buses",
    title: "Why Real-Time GPS Tracking Matters for School Buses",
    description:
      "Parents and school administrators no longer have to guess where the bus is. Here's why live tracking has become a baseline expectation, not a bonus feature.",
    date: "2026-06-02",
    category: "Student Transportation",
    image: "/images/serve-schools.jpg",
    content: [
      "For decades, student transportation ran on trust: parents trusted that the bus would show up, and schools trusted that drivers were following their routes. That trust was rarely verified in real time.",
      "Live GPS tracking changes the relationship between families and school transport. Parents can see exactly where the bus is, get an accurate ETA, and receive an alert the moment their child boards or leaves the bus. Administrators get the same visibility across an entire fleet, instead of relying on radio check-ins or after-the-fact incident reports.",
      "The operational upside is just as significant. Dispatchers can spot a delayed route before it becomes a wave of parent phone calls, and route planners can use historical GPS data to fix chronically late stops instead of guessing at causes.",
      "As districts and private schools face increasing scrutiny over duty-of-care obligations, real-time tracking is quickly becoming table stakes rather than a differentiator — and the schools that adopt it early are the ones fielding fewer safety complaints.",
    ],
  },
  {
    slug: "ai-safety-monitoring-onboard-transportation",
    title: "How AI Safety Monitoring Works Onboard a Transportation Fleet",
    description:
      "AI-powered CCTV and audio analysis can catch unsafe events long before a human reviewer would. Here's a practical look at how it works.",
    date: "2026-05-18",
    category: "Safety",
    image: "/images/slide-2.jpg",
    content: [
      "Onboard cameras have existed on buses for years, but until recently they served one purpose: recording footage for someone to review after an incident was already reported. That model is reactive by design.",
      "AI safety monitoring flips the model. Onboard CCTV and audio feeds are analyzed continuously, with models trained to detect specific risk signals — unsafe driver behavior, aggressive interactions between passengers, a child left unattended, or a vehicle deviating from its expected route.",
      "When the system detects a likely issue, it doesn't wait for someone to pull footage days later. It surfaces an alert to a live operations team, who can review the flagged moment and respond — contacting the driver, notifying a school, or escalating to emergency services if needed.",
      "The result is a transportation service that can catch problems in minutes instead of days, without requiring a human to watch every camera feed on every vehicle at once.",
    ],
  },
  {
    slug: "corporate-shuttle-programs-reduce-commute-friction",
    title: "How Corporate Shuttle Programs Reduce Commute Friction",
    description:
      "A well-run shuttle program does more than move employees — it removes a daily source of stress and supports retention.",
    date: "2026-04-27",
    category: "Corporate Shuttle",
    image: "/images/serve-corporate.jpg",
    content: [
      "Commuting is consistently ranked as one of the least enjoyable parts of the workday, and unreliable transport options make it worse. A dependable shuttle program addresses this directly by removing the uncertainty of parking, traffic, and public transit connections.",
      "The organizations that get the most value from shuttle programs treat them as an operational service, not a perk to set and forget. That means routes are re-evaluated as headcount and office locations change, punctuality is tracked and reported on, and employees have a simple way to confirm a shuttle is coming.",
      "Digital check-in adds another layer of value: HR and facilities teams get accurate ridership data instead of guessing at utilization, which makes it far easier to justify — and right-size — the program over time.",
      "Done well, a shuttle program becomes a quiet retention tool. Done poorly, with no visibility and unreliable timing, it becomes another source of daily frustration.",
    ],
  },
  {
    slug: "fleet-compliance-checklist-for-bus-operators",
    title: "A Practical Fleet Compliance Checklist for Bus Operators",
    description:
      "Compliance failures rarely come from one big mistake — they come from small gaps that accumulate across a fleet. Here's what to track.",
    date: "2026-03-15",
    category: "Fleet Management",
    image: "/images/serve-fleet.jpg",
    content: [
      "Fleet compliance covers more ground than most operators initially expect: vehicle inspections and maintenance schedules, driver licensing and training records, insurance documentation, and route-specific regulatory requirements that vary by client type.",
      "The operators who stay ahead of compliance issues aren't the ones with the fewest vehicles — they're the ones with the clearest system for tracking renewal dates, inspection results, and driver records in one place, instead of across paper files or scattered spreadsheets.",
      "A useful baseline checklist includes: vehicle inspection and maintenance history per unit, insurance and registration renewal dates, driver license and training expiry tracking, incident and near-miss logs, and client-specific compliance documentation (particularly for school contracts).",
      "Centralizing this into a single operational dashboard doesn't just reduce risk — it also makes it dramatically easier to win and retain contracts with schools and corporates who increasingly ask for documented proof of compliance before signing.",
    ],
  },
  {
    slug: "choosing-between-bus-rental-and-a-managed-fleet",
    title: "Choosing Between Bus Rental and a Managed Fleet Contract",
    description:
      "Not every organization needs a full-time managed fleet. Here's how to think about when rental makes sense and when it doesn't.",
    date: "2026-02-09",
    category: "Bus Rental",
    image: "/images/slide-4.jpg",
    content: [
      "Bus rental and managed fleet contracts solve different problems, and choosing the wrong one usually shows up as wasted budget or inadequate service.",
      "Rental makes sense for one-off or infrequent needs: a field trip, a conference, a seasonal event, or a short-term surge in transport demand. The commitment is short, the routes are typically fixed in advance, and the priority is a reliable vehicle and driver for a defined window.",
      "A managed fleet contract makes sense when transport is a recurring, daily operational need — student pick-up and drop-off, employee shuttles, or ongoing multi-site logistics. Here, the value isn't just the vehicles; it's the ongoing route optimization, safety monitoring, and reporting that only make sense at scale.",
      "The organizations that get this decision right usually start with rental to test a route or program, then transition to a managed contract once the need proves to be recurring rather than occasional.",
    ],
  },
  {
    slug: "digital-attendance-check-in-check-out-transportation",
    title: "Why Digital Check-In/Check-Out Is Replacing the Paper Roll-Call",
    description:
      "QR, NFC, and wristband check-in aren't just about convenience — they close a safety gap that manual roll-call can't reliably cover.",
    date: "2026-01-22",
    category: "Safety",
    image: "/images/slide-5.jpg",
    content: [
      "A manual roll-call depends on a driver or monitor correctly counting and recording every passenger, on every trip, without error — a standard that's difficult to maintain consistently across a large fleet.",
      "Digital check-in removes that dependency. A QR scan, NFC tap, or wristband read logs the exact moment a student or employee boards or leaves a vehicle, creating a timestamped record that can be checked against the expected roster automatically.",
      "The immediate benefit is fewer errors: a missed boarding or an unrecorded drop-off is flagged instantly instead of discovered later. The longer-term benefit is data — attendance patterns, chronic no-shows, and route utilization all become visible without extra administrative work.",
      "For organizations balancing safety obligations with operational efficiency, digital check-in is one of the highest-leverage upgrades available, because it turns a manual process prone to human error into an automatic, auditable one.",
    ],
  },
];

export const blogPostsAr: BlogPost[] = [
  {
    slug: "why-real-time-gps-tracking-matters-for-school-buses",
    title: "لماذا يهم التتبع المباشر عبر GPS في الحافلات المدرسية",
    description:
      "لم يعد على أولياء الأمور وإداريي المدارس التخمين بشأن مكان الحافلة. إليك سبب تحوّل التتبع المباشر إلى توقع أساسي، لا ميزة إضافية.",
    date: "2026-06-02",
    category: "نقل الطلاب",
    image: "/images/serve-schools.jpg",
    content: [
      "لعقود، اعتمد نقل الطلاب على الثقة: كان أولياء الأمور يثقون بأن الحافلة ستصل، وكانت المدارس تثق بأن السائقين يلتزمون بمساراتهم. ونادراً ما كانت هذه الثقة تُتحقق منها لحظياً.",
      "يغيّر التتبع المباشر عبر GPS العلاقة بين الأسر ونقل المدارس. يمكن لأولياء الأمور رؤية مكان الحافلة بدقة، والحصول على وقت وصول متوقع دقيق، وتلقي تنبيه لحظة صعود طفلهم أو نزوله من الحافلة. ويحصل الإداريون على نفس الرؤية عبر الأسطول بالكامل، بدلاً من الاعتماد على تواصل لاسلكي أو تقارير حوادث بعد وقوعها.",
      "الفائدة التشغيلية لا تقل أهمية. يمكن للمنسقين رصد تأخر مسار ما قبل أن يتحول إلى موجة من مكالمات أولياء الأمور، ويمكن لمخططي المسارات استخدام بيانات GPS التاريخية لإصلاح المحطات المتأخرة بشكل متكرر بدلاً من تخمين الأسباب.",
      "مع تزايد الرقابة على التزامات المدارس والإدارات التعليمية تجاه رعاية الطلاب، أصبح التتبع اللحظي متطلباً أساسياً لا ميزة تنافسية — والمدارس التي تتبنّاه مبكراً هي الأقل تلقياً لشكاوى السلامة.",
    ],
  },
  {
    slug: "ai-safety-monitoring-onboard-transportation",
    title: "كيف تعمل مراقبة السلامة بالذكاء الاصطناعي داخل أسطول النقل",
    description:
      "يمكن لتحليل الكاميرات والصوت المدعوم بالذكاء الاصطناعي رصد الأحداث غير الآمنة قبل وقت طويل من قدرة أي مراجع بشري على ذلك. إليك نظرة عملية على آلية عمله.",
    date: "2026-05-18",
    category: "السلامة",
    image: "/images/slide-2.jpg",
    content: [
      "توجد الكاميرات داخل الحافلات منذ سنوات، لكنها حتى وقت قريب كانت تخدم غرضاً واحداً: تسجيل لقطات ليراجعها أحدهم بعد الإبلاغ عن حادثة بالفعل. هذا النموذج تفاعلي بطبيعته.",
      "تقلب المراقبة بالذكاء الاصطناعي هذا النموذج رأساً على عقب. يُحلَّل بث الكاميرات والصوت داخل المركبة باستمرار، بنماذج مدرَّبة على رصد إشارات خطر محددة — سلوك قيادة غير آمن، تفاعلات عدوانية بين الركاب، طفل متروك دون إشراف، أو انحراف المركبة عن مسارها المتوقع.",
      "عندما يرصد النظام مشكلة محتملة، فهو لا ينتظر أن يستخرج أحدهم اللقطات بعد أيام. بل يرسل تنبيهاً فورياً لفريق عمليات مباشر، يمكنه مراجعة اللحظة المرصودة والاستجابة — بالتواصل مع السائق، أو إبلاغ المدرسة، أو التصعيد لخدمات الطوارئ إذا لزم الأمر.",
      "والنتيجة خدمة نقل قادرة على رصد المشكلات خلال دقائق بدلاً من أيام، دون الحاجة إلى مراقبة بشرية لكل بث كاميرا في كل مركبة في آن واحد.",
    ],
  },
  {
    slug: "corporate-shuttle-programs-reduce-commute-friction",
    title: "كيف تقلل برامج نقل الموظفين من متاعب التنقل",
    description:
      "برنامج نقل الموظفين المُدار جيداً يفعل أكثر من مجرد نقلهم — فهو يزيل مصدر توتر يومي ويدعم الاحتفاظ بالموظفين.",
    date: "2026-04-27",
    category: "نقل الموظفين",
    image: "/images/serve-corporate.jpg",
    content: [
      "يُصنَّف التنقل باستمرار كأحد أقل أجزاء يوم العمل متعة، ويزيد سوء خيارات النقل غير الموثوقة الأمر سوءاً. يعالج برنامج نقل موظفين موثوق هذه المشكلة مباشرة بإزالة عدم اليقين المتعلق بمواقف السيارات والازدحام ومواصلات النقل العام.",
      "المؤسسات التي تحقق أكبر استفادة من برامج نقل الموظفين تتعامل معها كخدمة تشغيلية، لا كميزة تُنشأ ثم تُنسى. ويعني ذلك إعادة تقييم المسارات مع تغيّر عدد الموظفين ومواقع المكاتب، وتتبع الالتزام بالمواعيد وإعداد تقارير عنه، وتوفير طريقة بسيطة للموظفين للتأكد من وصول الحافلة.",
      "يضيف تسجيل الدخول الرقمي طبقة أخرى من القيمة: تحصل فرق الموارد البشرية والمرافق على بيانات ركاب دقيقة بدلاً من تخمين معدل الاستخدام، ما يسهّل كثيراً تبرير البرنامج — وضبط حجمه — بمرور الوقت.",
      "إذا نُفِّذ البرنامج بشكل جيد، يصبح أداة احتفاظ هادئة بالموظفين. أما إذا نُفِّذ بشكل سيئ، دون رؤية أو التزام بالمواعيد، فيتحول إلى مصدر إحباط يومي آخر.",
    ],
  },
  {
    slug: "fleet-compliance-checklist-for-bus-operators",
    title: "قائمة تحقق عملية لالتزام الأسطول لمشغلي الحافلات",
    description:
      "نادراً ما ينتج فشل الالتزام عن خطأ كبير واحد — بل عن ثغرات صغيرة تتراكم عبر الأسطول. إليك ما يجب تتبعه.",
    date: "2026-03-15",
    category: "إدارة الأسطول",
    image: "/images/serve-fleet.jpg",
    content: [
      "يغطي التزام الأسطول نطاقاً أوسع مما يتوقعه معظم المشغلين في البداية: فحوصات المركبات وجداول الصيانة، وسجلات ترخيص وتدريب السائقين، ووثائق التأمين، والمتطلبات النظامية الخاصة بالمسار التي تختلف حسب نوع العميل.",
      "المشغلون الذين يتقدمون في مسائل الالتزام ليسوا أصحاب أقل عدد من المركبات — بل أصحاب النظام الأوضح لتتبع تواريخ التجديد ونتائج الفحص وسجلات السائقين في مكان واحد، بدلاً من ملفات ورقية أو جداول بيانات متفرقة.",
      "تشمل قائمة تحقق أساسية مفيدة: سجل فحص وصيانة كل مركبة، وتواريخ تجديد التأمين والتسجيل، وتتبع انتهاء رخص وتدريب السائقين، وسجلات الحوادث وحالات الاقتراب من الحادث، ووثائق التزام خاصة بكل عميل (خصوصاً عقود المدارس).",
      "لا يقلل تجميع هذه البيانات في لوحة تحكم تشغيلية واحدة من المخاطر فحسب — بل يسهّل أيضاً بشكل كبير الفوز بعقود المدارس والشركات والاحتفاظ بها، إذ تطلب هذه الجهات بشكل متزايد إثباتاً موثقاً للالتزام قبل التوقيع.",
    ],
  },
  {
    slug: "choosing-between-bus-rental-and-a-managed-fleet",
    title: "الاختيار بين تأجير الحافلات وعقد الأسطول المُدار",
    description:
      "ليست كل مؤسسة بحاجة إلى أسطول مُدار بدوام كامل. إليك كيفية التفكير في متى يكون التأجير منطقياً ومتى لا يكون.",
    date: "2026-02-09",
    category: "تأجير الحافلات",
    image: "/images/slide-4.jpg",
    content: [
      "يحل تأجير الحافلات وعقود الأسطول المُدار مشكلات مختلفة، وعادة ما يظهر اختيار الخيار الخاطئ على شكل هدر في الميزانية أو خدمة غير كافية.",
      "يكون التأجير منطقياً للاحتياجات الفردية أو غير المتكررة: رحلة مدرسية، أو مؤتمر، أو فعالية موسمية، أو ارتفاع مؤقت في الطلب على النقل. الالتزام قصير، وعادة ما تكون المسارات محددة مسبقاً، والأولوية هي توفير مركبة وسائق موثوقين لفترة محددة.",
      "يكون عقد الأسطول المُدار منطقياً عندما يكون النقل حاجة تشغيلية يومية متكررة — نقل الطلاب ذهاباً وإياباً، أو نقل الموظفين، أو لوجستيات مستمرة متعددة المواقع. هنا لا تكمن القيمة في المركبات فقط، بل في تحسين المسارات المستمر ومراقبة السلامة والتقارير التي لا تكون مجدية إلا على نطاق واسع.",
      "المؤسسات التي تتخذ هذا القرار بشكل صحيح تبدأ عادة بالتأجير لاختبار مسار أو برنامج، ثم تنتقل إلى عقد مُدار بمجرد أن تثبت الحاجة أنها متكررة وليست عرضية.",
    ],
  },
  {
    slug: "digital-attendance-check-in-check-out-transportation",
    title: "لماذا يحل تسجيل الحضور والانصراف الرقمي محل العد اليدوي الورقي",
    description:
      "تسجيل الدخول عبر QR وNFC والأساور ليس مجرد وسيلة راحة — بل يسد ثغرة سلامة لا يمكن للعد اليدوي تغطيتها بشكل موثوق.",
    date: "2026-01-22",
    category: "السلامة",
    image: "/images/slide-5.jpg",
    content: [
      "يعتمد العد اليدوي على قيام السائق أو المراقب بعدّ وتسجيل كل راكب بشكل صحيح، في كل رحلة، دون خطأ — وهو معيار يصعب الحفاظ عليه باستمرار عبر أسطول كبير.",
      "يزيل تسجيل الدخول الرقمي هذا الاعتماد. تسجّل مسحة QR أو لمسة NFC أو قراءة السوار اللحظة الدقيقة لصعود أو نزول الطالب أو الموظف من المركبة، ما ينشئ سجلاً موثقاً بالوقت يمكن مطابقته تلقائياً مع القائمة المتوقعة.",
      "الفائدة الفورية هي أخطاء أقل: يُرصَد فوراً أي صعود فائت أو نزول غير مسجَّل بدلاً من اكتشافه لاحقاً. أما الفائدة طويلة المدى فهي البيانات — إذ تصبح أنماط الحضور وحالات الغياب المتكرر ومعدلات استخدام المسار مرئية دون عمل إداري إضافي.",
      "بالنسبة للمؤسسات التي توازن بين التزامات السلامة والكفاءة التشغيلية، يُعد تسجيل الدخول الرقمي واحداً من أعلى التحسينات تأثيراً المتاحة، لأنه يحوّل عملية يدوية عرضة للخطأ البشري إلى عملية آلية وقابلة للتدقيق.",
    ],
  },
];

export function getPostBySlug(slug: string, lang: "en" | "ar" = "en") {
  const source = lang === "ar" ? blogPostsAr : blogPosts;
  return source.find((post) => post.slug === slug);
}
