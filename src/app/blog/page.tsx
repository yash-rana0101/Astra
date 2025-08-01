'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Tag,
  Heart,
  MessageCircle,
  Share2,
  Filter
} from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  likes: number
  comments: number
  featured: boolean
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFullPost, setShowFullPost] = useState<number | null>(null)

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Evolution of Women's Safety Technology: From Basic Alarms to AI-Powered Solutions",
      excerpt: "Exploring how technology has transformed women's safety over the decades, from simple panic buttons to sophisticated AI systems that can predict and prevent dangerous situations.",
      content: `
        The landscape of women's safety technology has undergone a remarkable transformation over the past few decades. What began with simple panic buttons and basic alarm systems has evolved into sophisticated AI-powered ecosystems that can predict, prevent, and respond to dangerous situations with unprecedented accuracy.

        ## The Early Days: Basic Alert Systems

        In the 1980s and 1990s, women's safety devices were primarily mechanical. Simple whistle keychains, basic panic buttons, and rudimentary alarm systems were the primary tools available. While these devices served their purpose, they had significant limitations:

        - Required manual activation
        - Limited range and connectivity
        - No way to communicate location or context
        - Often produced false alarms

        ## The Mobile Revolution

        The widespread adoption of mobile phones in the early 2000s marked the first major leap in safety technology. Suddenly, women could call for help from virtually anywhere, share their location, and even send text messages when speaking wasn't safe.

        Key innovations during this period included:
        - Emergency contact speed dial
        - Location sharing via SMS
        - Basic safety apps with pre-programmed messages
        - GPS tracking capabilities

        ## The Smartphone Era: Apps and Integration

        With the advent of smartphones, safety technology became more sophisticated and accessible. Developers began creating dedicated safety apps that could:

        - Send automatic alerts to emergency contacts
        - Record audio and video evidence
        - Share real-time location data
        - Connect to emergency services
        - Provide safety route planning

        Popular apps like bSafe, Hollaback!, and SafeTrek gained millions of users, proving there was a significant demand for digital safety solutions.

        ## The AI Revolution: Predictive and Proactive Safety

        Today's safety technology, exemplified by systems like Astra, represents the cutting edge of AI-powered protection. These systems can:

        ### Voice Recognition and Analysis
        Modern AI can detect distress in a person's voice, even when they're trying to appear calm. Advanced algorithms analyze:
        - Vocal stress patterns
        - Speech tempo changes
        - Background noise analysis
        - Keyword recognition in multiple languages

        ### Behavioral Pattern Learning
        AI systems learn individual users' patterns and can detect anomalies that might indicate danger:
        - Unusual location patterns
        - Unexpected changes in routine
        - Deviation from normal communication patterns
        - Irregular movement or activity levels

        ### Predictive Analytics
        By analyzing vast amounts of data, AI can identify potentially dangerous situations before they escalate:
        - High-risk location identification
        - Time-based threat assessment
        - Social pattern analysis
        - Environmental factor consideration

        ## The Internet of Things (IoT) Integration

        Modern safety systems don't work in isolation. They're part of interconnected ecosystems that include:

        - Wearable devices (smartwatches, jewelry, clothing)
        - Smart home integration
        - Vehicle connectivity
        - Public infrastructure integration
        - Social network connectivity

        ## Privacy and Ethical Considerations

        As safety technology becomes more sophisticated, important questions arise about privacy and data protection:

        - How much personal data should safety systems collect?
        - Who has access to emergency recordings and location data?
        - How long should sensitive information be stored?
        - What safeguards exist against misuse of the technology?

        ## The Future: What's Next?

        Looking ahead, several emerging technologies promise to further revolutionize women's safety:

        ### Augmented Reality (AR)
        AR could provide real-time safety information overlaid on the physical world, helping women identify safe routes and potential threats.

        ### Advanced Biometric Monitoring
        Future devices might monitor heart rate, stress hormones, and other biological indicators to detect danger even before the conscious mind recognizes it.

        ### Community-Based AI
        AI systems could analyze community-wide data to identify emerging threats and warn users about dangerous areas or situations in real-time.

        ### Seamless Integration
        The goal is technology so seamlessly integrated into daily life that it provides protection without requiring any conscious effort from the user.

        ## Conclusion

        The evolution from basic alarms to AI-powered safety ecosystems represents more than just technological advancement—it represents society's growing commitment to women's safety and empowerment. As these technologies continue to evolve, they promise a future where every woman can move through the world with confidence, knowing that sophisticated, intelligent systems are watching out for her safety.

        The key to the success of these technologies lies not just in their sophistication, but in their accessibility, ease of use, and respect for user privacy. As we move forward, the focus must remain on creating solutions that truly serve and empower women, rather than simply showcasing technological capability.
      `,
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Technology",
      tags: ["AI", "Safety Tech", "Innovation", "Women's Safety"],
      image: "/api/placeholder/800/400",
      likes: 245,
      comments: 32,
      featured: true
    },
    {
      id: 2,
      title: "Building Confidence: Self-Defense Techniques Every Woman Should Know",
      excerpt: "Essential self-defense strategies that go beyond physical techniques, focusing on awareness, prevention, and mental preparedness to help women feel more confident and secure.",
      content: `
        Self-defense is about much more than learning to throw a punch or execute a perfect kick. True self-defense encompasses awareness, prevention, mental preparation, and yes, physical techniques when necessary. This comprehensive guide will help you build a complete toolkit for personal safety.

        ## The Foundation: Situational Awareness

        The most effective self-defense technique is avoiding dangerous situations altogether. Developing strong situational awareness is your first and most important line of defense.

        ### The SAFE Method
        - **S**can your environment regularly
        - **A**ssess potential threats and escape routes
        - **F**eel confident in your instincts
        - **E**xit when something feels wrong

        ### Trust Your Instincts
        Your subconscious mind processes thousands of subtle cues that your conscious mind might miss. If something feels "off," trust that feeling and take action:
        - Change your route
        - Enter a public space
        - Call someone
        - Be prepared to defend yourself

        ## Mental Preparation: The Warrior Mindset

        Physical techniques are only as effective as your mental readiness to use them. Developing the right mindset is crucial:

        ### Overcoming the Freeze Response
        In dangerous situations, many people experience "freeze" - a natural but potentially dangerous response. Combat this by:
        - Practicing scenarios mentally
        - Using breathing techniques to stay calm
        - Visualizing successful escapes
        - Building confidence through training

        ### The Power of Presence
        Criminals often target people who appear vulnerable or distracted. Project confidence through:
        - Upright posture
        - Purposeful movement
        - Aware but not paranoid scanning
        - Making appropriate eye contact

        ## Essential Physical Techniques

        While avoidance is preferable, sometimes physical defense becomes necessary. Here are fundamental techniques every woman should know:

        ### Striking Techniques

        #### Palm Strike
        More effective and safer than a punch:
        - Keep fingers back, palm forward
        - Strike with the heel of your palm
        - Aim for the nose, chin, or solar plexus
        - Follow through with your whole body

        #### Elbow Strike
        One of the most powerful close-range techniques:
        - Keep elbow tight to your body
        - Strike backward, forward, or to the side
        - Aim for the ribs, solar plexus, or face
        - Use your whole body's rotation

        #### Knee Strike
        Effective when grabbed from the front:
        - Drive your knee upward forcefully
        - Aim for the groin, stomach, or ribs
        - Grab the attacker's shoulders or head for leverage
        - Follow up with other techniques

        ### Escape Techniques

        #### Wrist Grab Escape
        When someone grabs your wrist:
        - Turn your arm toward the attacker's thumb
        - Pull sharply in that direction
        - The thumb is the weakest point of their grip
        - Immediately create distance

        #### Bear Hug Escape
        If grabbed from behind:
        - Step on their foot with your heel
        - Throw your head back to hit their nose
        - Elbow strike to the ribs
        - Drop your weight and twist away

        #### Choke Escape
        If someone grabs your throat:
        - Grab their wrists and push up and out
        - Knee strike to the groin
        - Eye gouge if necessary
        - Create space and escape immediately

        ## Verbal De-escalation

        Sometimes the most effective defense is verbal:

        ### Assertive Communication
        - Use a firm, clear voice
        - Make direct statements: "Stop," "No," "Leave me alone"
        - Avoid apologizing or making excuses
        - Project confidence even if you don't feel it

        ### Drawing Attention
        - Make noise to attract help
        - Yell "Fire!" rather than "Help!" (more likely to get response)
        - Use car alarms, store alarms, anything to create noise
        - Make yourself a less attractive target

        ## Environmental Weapons

        In dangerous situations, everyday objects can become defensive tools:

        ### Keys
        - Hold between your fingers (but not the "Wolverine" method)
        - Use as a striking weapon to the face or hands
        - Car key alarms can create distraction

        ### Purse or Bag
        - Swing to create distance
        - Use as a shield
        - Heavy items inside add impact

        ### Improvised Weapons
        - Pens as striking tools
        - Hot coffee or drinks
        - Sand or dirt to the eyes
        - Anything to create opportunity to escape

        ## Technology Integration

        Modern self-defense incorporates technology:

        ### Safety Apps
        - Quick access to emergency contacts
        - Location sharing capabilities
        - Fake call features for escape opportunities
        - Evidence recording functions

        ### Wearable Devices
        - Panic buttons on jewelry or clothing
        - GPS tracking for loved ones
        - Health monitoring for stress detection
        - Discreet communication devices

        ## Practice and Training

        Knowledge without practice is ineffective:

        ### Regular Training
        - Take a self-defense class
        - Practice techniques regularly
        - Train with a partner when possible
        - Include scenario-based practice

        ### Physical Fitness
        - Build functional strength
        - Improve cardiovascular health
        - Enhance flexibility and mobility
        - Develop explosive power

        ## Legal Considerations

        Understanding the legal aspects of self-defense:

        ### Reasonable Force
        - Use only the force necessary to escape
        - Avoid continued attack once threat is neutralized
        - Understand your local laws
        - Seek escape, not revenge

        ### Documentation
        - Report incidents to police
        - Seek medical attention if injured
        - Document everything
        - Seek legal counsel if necessary

        ## Building Long-term Confidence

        Self-defense is a journey, not a destination:

        ### Continuous Learning
        - Stay updated on new techniques
        - Learn from others' experiences
        - Adapt to changing environments
        - Build a support network

        ### Holistic Approach
        - Combine physical, mental, and technological tools
        - Address underlying fears and anxieties
        - Build overall life confidence
        - Help others learn and grow

        ## Conclusion

        Effective self-defense is about building a comprehensive toolkit that includes awareness, mental preparation, physical techniques, and modern technology. The goal isn't to become a martial arts expert, but to develop the confidence and skills needed to recognize danger, avoid it when possible, and defend yourself when necessary.

        Remember, the best self-defense technique is the one you never have to use. By developing strong situational awareness, trusting your instincts, and being prepared, you can significantly reduce your risk of becoming a victim while building the confidence to live your life fully and fearlessly.

        Most importantly, self-defense is not just about individual protection—it's about creating a culture where all women feel empowered and safe. By learning these skills and sharing them with others, we contribute to a safer world for everyone.
      `,
      author: "Maria Rodriguez",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Self-Defense",
      tags: ["Self-Defense", "Safety Tips", "Empowerment", "Training"],
      image: "/api/placeholder/800/400",
      likes: 189,
      comments: 45,
      featured: true
    },
    {
      id: 3,
      title: "Understanding and Overcoming Fear: A Psychological Approach to Personal Safety",
      excerpt: "Exploring the psychology of fear and how understanding our mental responses to danger can help us make better safety decisions and build genuine confidence.",
      content: `
        Fear is a natural and necessary emotion that has helped humans survive for millennia. However, in our modern world, fear can sometimes become counterproductive, either paralyzing us when we need to act or causing us to ignore real dangers. Understanding the psychology of fear is crucial for developing effective personal safety strategies.

        ## The Science of Fear

        ### How Fear Works in the Brain
        When we perceive a threat, our brain initiates a complex response:

        #### The Amygdala Response
        - Instantly evaluates threats
        - Triggers fight, flight, or freeze responses
        - Bypasses rational thinking for speed
        - Can create false alarms

        #### The Prefrontal Cortex
        - Provides rational analysis
        - Evaluates the actual threat level
        - Plans appropriate responses
        - Can be overwhelmed by strong fear responses

        ### Types of Fear Response

        #### Adaptive Fear
        This is healthy fear that protects us:
        - Avoiding dangerous situations
        - Staying alert in unfamiliar environments
        - Trusting gut instincts about people
        - Taking appropriate precautions

        #### Maladaptive Fear
        This is fear that limits our lives unnecessarily:
        - Avoiding all social situations
        - Refusing to leave home
        - Constant anxiety about unlikely threats
        - Inability to trust anyone

        ## The Psychology of Victimization

        ### Understanding Predator Psychology
        Knowledge of how perpetrators think can help in prevention:

        #### Target Selection
        Predators often look for:
        - People who appear distracted or unaware
        - Those who seem isolated or vulnerable
        - Individuals who appear to lack confidence
        - People in predictable routines

        #### Grooming Behaviors
        Understanding these can help identify manipulation:
        - Building false trust quickly
        - Testing boundaries gradually
        - Isolating potential victims
        - Using authority or charm to control

        ### The Victim Mindset vs. Survivor Mindset

        #### Victim Mindset Characteristics:
        - Feeling powerless and helpless
        - Believing bad things "just happen"
        - Avoiding responsibility for personal safety
        - Waiting for others to provide protection

        #### Survivor Mindset Characteristics:
        - Taking active responsibility for safety
        - Believing in personal agency and power
        - Learning from experiences and adapting
        - Preparing for various scenarios

        ## Building Psychological Resilience

        ### Cognitive Restructuring
        Changing how we think about safety and danger:

        #### Challenging Catastrophic Thinking
        - Question worst-case scenario assumptions
        - Focus on probable rather than possible outcomes
        - Develop balanced risk assessment skills
        - Practice evidence-based thinking

        #### Reframing Vulnerability as Awareness
        - View caution as wisdom, not weakness
        - See preparation as empowerment
        - Frame learning as growth opportunity
        - Consider safety skills as life skills

        ### Stress Inoculation Training
        Gradually exposing yourself to controlled stress to build tolerance:

        #### Mental Rehearsal
        - Visualize various scenarios and responses
        - Practice calm breathing during visualization
        - Rehearse successful outcomes
        - Build mental muscle memory

        #### Progressive Exposure
        - Start with low-stress situations
        - Gradually increase challenge level
        - Build confidence through success
        - Develop coping strategies

        ## Intuition and Gut Feelings

        ### The Science of Intuition
        Your subconscious mind processes thousands of subtle cues:

        #### Microexpressions
        - Facial expressions lasting milliseconds
        - Often reveal true intentions
        - Processed subconsciously
        - Contribute to "gut feelings"

        #### Body Language Reading
        - Posture and movement patterns
        - Personal space violations
        - Nervous behaviors or fidgeting
        - Incongruent verbal and physical messages

        ### Developing Intuitive Skills

        #### Mindfulness Practice
        - Stay present in the moment
        - Notice physical sensations
        - Pay attention to emotional responses
        - Practice non-judgmental observation

        #### Trust Building Exercises
        - Start with low-stakes decisions
        - Notice when intuition is correct
        - Learn to distinguish fear from intuition
        - Build confidence in inner wisdom

        ## Trauma and Recovery

        ### Understanding Trauma Responses
        Past traumatic experiences can affect safety responses:

        #### Hypervigilance
        - Constant scanning for threats
        - Difficulty relaxing or feeling safe
        - Exhausting mental state
        - Can lead to false threat perception

        #### Avoidance
        - Limiting activities or locations
        - Avoiding people or situations
        - Can restrict life significantly
        - May increase anxiety over time

        #### Dissociation
        - Mental disconnection during stress
        - Can impair decision-making ability
        - May prevent appropriate responses
        - Requires professional support

        ### Healing and Recovery Strategies

        #### Professional Support
        - Trauma-informed therapy
        - EMDR (Eye Movement Desensitization and Reprocessing)
        - Cognitive Behavioral Therapy
        - Support groups with other survivors

        #### Self-Care Practices
        - Regular exercise and movement
        - Mindfulness and meditation
        - Creative expression
        - Building supportive relationships

        ## Building Authentic Confidence

        ### Internal vs. External Confidence

        #### Internal Confidence
        - Based on self-knowledge and skills
        - Comes from preparation and practice
        - Remains stable under pressure
        - Built through experience and growth

        #### External Confidence
        - Based on others' opinions or circumstances
        - Can be easily shaken
        - Dependent on external validation
        - Often superficial or temporary

        ### Confidence-Building Strategies

        #### Skill Development
        - Learn practical safety skills
        - Practice physical techniques
        - Develop communication abilities
        - Build problem-solving capabilities

        #### Success Cataloging
        - Keep record of successful safety decisions
        - Note times when intuition was correct
        - Celebrate small victories
        - Build evidence of personal capability

        ## Social Psychology and Safety

        ### Bystander Effect
        Understanding why people might not help:
        - Diffusion of responsibility
        - Fear of misreading situations
        - Social conformity pressures
        - Lack of knowledge about how to help

        ### Creating Support Networks
        Building communities that enhance safety:

        #### Mutual Support Systems
        - Check-in buddy systems
        - Shared transportation arrangements
        - Group safety planning
        - Skill sharing and teaching

        #### Community Awareness
        - Neighborhood watch programs
        - Safety education initiatives
        - Bystander intervention training
        - Supporting survivors

        ## Technology and Psychology

        ### Digital Age Fears
        New technologies create new psychological challenges:

        #### Information Overload
        - Constant exposure to danger stories
        - Difficulty assessing actual risk
        - Anxiety from too much information
        - Need for media literacy

        #### False Security
        - Over-reliance on technology
        - Decreased situational awareness
        - Assumption that technology prevents all danger
        - Need for balanced approach

        ### Healthy Technology Relationships
        Using technology to support rather than replace human judgment:

        #### Complementary Tools
        - Technology as backup to intuition
        - Apps that enhance rather than replace awareness
        - Devices that support human decision-making
        - Tools that build rather than erode confidence

        ## Creating Lasting Change

        ### Gradual Transformation
        Psychological change takes time and patience:

        #### Small Steps Approach
        - Make minor changes daily
        - Build habits gradually
        - Celebrate incremental progress
        - Avoid overwhelming yourself

        #### Integration Practice
        - Apply learning in daily life
        - Connect psychological insights to practical actions
        - Share knowledge with others
        - Continuous reflection and adjustment

        ## Conclusion

        Understanding the psychology of fear and safety is fundamental to developing effective personal protection strategies. By recognizing how our minds process threats, building psychological resilience, and developing authentic confidence, we can make better safety decisions and live more fully.

        The goal isn't to eliminate fear entirely—that would be dangerous and impossible. Instead, we want to develop a healthy relationship with fear, where it serves as a useful warning system without controlling our lives. Through understanding, practice, and support, we can transform fear from a limiting force into an empowering tool for personal safety and growth.

        Remember, psychological strength, like physical strength, requires regular exercise and maintenance. By consistently working on our mental approach to safety, we build the resilience and confidence needed to navigate an uncertain world with wisdom and courage.
      `,
      author: "Dr. Jennifer Thompson",
      date: "2024-01-08",
      readTime: "15 min read",
      category: "Psychology",
      tags: ["Psychology", "Mental Health", "Fear", "Confidence"],
      image: "/api/placeholder/800/400",
      likes: 156,
      comments: 28,
      featured: false
    },
    {
      id: 4,
      title: "Campus Safety: A Comprehensive Guide for College Students",
      excerpt: "Essential safety strategies specifically designed for college environments, covering everything from dorm security to party safety and campus resources.",
      content: `
        College represents a unique environment where young adults experience unprecedented freedom while facing new and varied safety challenges. Understanding how to navigate campus life safely is crucial for making the most of this transformative period while protecting your well-being.

        ## Understanding the Campus Environment

        ### Unique Safety Challenges on Campus

        #### High Population Density
        - Large numbers of people in confined spaces
        - Mixture of familiar and unknown individuals
        - Varying levels of security awareness among students
        - Multiple access points to buildings and areas

        #### Social Pressure Dynamics
        - Pressure to fit in and be accepted
        - Experimentation with new behaviors
        - Peer influence on decision-making
        - FOMO (Fear of Missing Out) driving risky choices

        #### Transitional Life Stage
        - First time living independently
        - Developing adult decision-making skills
        - Learning to assess risks independently
        - Building new social networks

        ### Campus-Specific Risk Factors

        #### Alcohol and Substance Use
        College environments often involve:
        - High rates of alcohol consumption
        - Pressure to drink at social events
        - Binge drinking culture
        - Impaired judgment and vulnerability

        #### Social Dynamics
        - Power imbalances (seniors/freshmen, athletes/non-athletes)
        - Group think and mob mentality
        - Social media amplification of conflicts
        - Dating and relationship complexities

        ## Dorm and Housing Safety

        ### Room Security Basics

        #### Physical Security
        - Always lock your door, even for short trips
        - Don't prop doors open for convenience
        - Report broken locks or security issues immediately
        - Consider additional security devices (door alarms, locks)

        #### Roommate Safety
        - Establish clear agreements about guests
        - Share class schedules and general whereabouts
        - Discuss safety preferences and boundaries
        - Create emergency contact protocols

        #### Personal Belongings
        - Lock up valuables when leaving
        - Don't leave electronics or cash visible
        - Consider renters insurance for expensive items
        - Keep important documents secure

        ### Common Area Safety

        #### Laundry Rooms
        - Never leave clothes unattended
        - Avoid going alone late at night
        - Be aware of who else is in the area
        - Keep doors locked while inside

        #### Study Areas
        - Don't leave belongings unattended
        - Be cautious about sharing personal information
        - Use well-lit, populated areas for late-night studying
        - Have backup plans if feeling uncomfortable

        ## Party and Social Event Safety

        ### Pre-Party Planning

        #### The Buddy System
        - Always go to parties with trusted friends
        - Establish check-in times and signals
        - Plan how you'll get home safely
        - Designate someone to stay sober

        #### Communication Plan
        - Tell someone where you're going and when you'll return
        - Share location with trusted contacts
        - Establish code words for help
        - Keep your phone charged and accessible

        ### During Social Events

        #### Alcohol Safety
        - Know your limits and stick to them
        - Never leave your drink unattended
        - Don't accept drinks from strangers
        - Watch for signs of drink tampering

        #### Social Navigation
        - Trust your instincts about people and situations
        - Don't feel pressured to stay if uncomfortable
        - Keep track of your friends throughout the event
        - Have an exit strategy ready

        #### Consent and Boundaries
        - Understand that consent must be clear and ongoing
        - Respect others' boundaries and expect the same
        - Recognize that alcohol affects judgment
        - Know when to intervene for friends

        ## Academic Environment Safety

        ### Classroom and Lab Safety

        #### Personal Information Protection
        - Be cautious about sharing personal details
        - Don't leave personal items unattended
        - Be aware of who might be listening to conversations
        - Use privacy settings on academic platforms

        #### Late-Night Study Sessions
        - Use well-lit, populated study areas
        - Let someone know where you're studying
        - Have multiple route options for getting home
        - Consider studying with others when possible

        ### Professor and Authority Relationships

        #### Professional Boundaries
        - Understand appropriate professor-student interactions
        - Report any inappropriate advances or comments
        - Meet in public or official office settings
        - Keep records of concerning communications

        #### Academic Integrity and Pressure
        - Understand the consequences of academic dishonesty
        - Seek appropriate help for academic struggles
        - Don't compromise safety for academic success
        - Use official academic support services

        ## Campus Transportation Safety

        ### Walking Safety

        #### Route Planning
        - Familiarize yourself with campus layout
        - Identify well-lit, populated paths
        - Know locations of emergency phones and help stations
        - Plan multiple routes to common destinations

        #### Nighttime Precautions
        - Use campus escort services when available
        - Walk with purpose and confidence
        - Stay in well-lit areas
        - Keep phone accessible but maintain awareness

        ### Campus Transportation Options

        #### Shuttle Services
        - Learn schedule and routes
        - Wait in safe, visible locations
        - Report any safety concerns to authorities
        - Have backup transportation plans

        #### Ride-Sharing Safety
        - Verify driver and vehicle information
        - Share trip details with friends
        - Sit behind the driver when alone
        - Trust instincts about driver behavior

        ## Digital Safety on Campus

        ### Social Media Awareness

        #### Privacy Settings
        - Regularly review and update privacy settings
        - Be cautious about location sharing
        - Think before posting personal information
        - Understand long-term consequences of posts

        #### Online Harassment
        - Know how to report cyberbullying
        - Screenshot evidence of harassment
        - Block and report problematic accounts
        - Seek support from campus resources

        ### Academic Technology Safety

        #### Password Security
        - Use strong, unique passwords for all accounts
        - Enable two-factor authentication when available
        - Don't share login credentials with others
        - Log out of shared computers completely

        #### Personal Information Protection
        - Be cautious about what you share in online forums
        - Understand data privacy policies
        - Use campus-approved platforms when possible
        - Report security breaches immediately

        ## Campus Resources and Support

        ### Official Safety Resources

        #### Campus Security
        - Know how to contact campus police/security
        - Understand their role and limitations
        - Report all incidents, even if they seem minor
        - Participate in safety walks and assessments

        #### Emergency Services
        - Know locations of emergency phones
        - Understand campus emergency procedures
        - Sign up for emergency alerts
        - Participate in emergency drills

        ### Support Services

        #### Counseling and Mental Health
        - Know how to access counseling services
        - Understand confidentiality policies
        - Seek help for trauma or ongoing fears
        - Use stress management resources

        #### Health Services
        - Know location and hours of health center
        - Understand services available (contraception, STI testing, etc.)
        - Know how to access care after hours
        - Understand insurance and payment options

        ## Greek Life and Organizations

        ### Fraternity and Sorority Safety

        #### Rush and Pledging
        - Research organizations thoroughly
        - Understand hazing policies and reporting procedures
        - Don't compromise safety for acceptance
        - Maintain connections outside the organization

        #### Social Events
        - Understand organization policies on alcohol and behavior
        - Know your rights and responsibilities as a member
        - Report policy violations or concerning behavior
        - Maintain personal standards regardless of group pressure

        ### Student Organizations

        #### Leadership Responsibilities
        - Understand liability issues for organization leaders
        - Create and enforce safety policies
        - Provide safety education for members
        - Maintain appropriate insurance coverage

        ## Off-Campus Safety

        ### Housing Considerations

        #### Neighborhood Assessment
        - Research crime statistics for areas
        - Visit potential housing at different times of day
        - Talk to current residents about safety concerns
        - Understand public transportation options

        #### Apartment/House Security
        - Ensure proper locks on all doors and windows
        - Install additional security measures if needed
        - Get to know neighbors appropriately
        - Understand lease terms related to security

        ### Community Integration

        #### Local Resources
        - Learn about local law enforcement
        - Understand community emergency services
        - Know locations of hospitals and urgent care
        - Identify safe spaces in the neighborhood

        ## Crisis Response and Recovery

        ### Immediate Response

        #### During an Emergency
        - Prioritize personal safety over property
        - Call 911 if in immediate danger
        - Get to a safe location
        - Contact campus security and trusted contacts

        #### After an Incident
        - Seek medical attention if needed
        - Report to appropriate authorities
        - Document everything you remember
        - Reach out for emotional support

        ### Long-term Recovery

        #### Academic Accommodations
        - Understand options for academic support after trauma
        - Work with disability services if needed
        - Communicate with professors about needs
        - Use academic counseling resources

        #### Ongoing Support
        - Continue counseling or therapy as needed
        - Maintain connections with supportive friends and family
        - Consider support groups for survivors
        - Focus on healing and rebuilding confidence

        ## Building a Safety Culture

        ### Peer Education

        #### Bystander Intervention
        - Learn to recognize concerning situations
        - Understand safe ways to intervene
        - Practice intervention techniques
        - Support friends who intervene

        #### Creating Supportive Communities
        - Foster open communication about safety
        - Challenge harmful attitudes and behaviors
        - Support survivors and those seeking help
        - Participate in safety education programs

        ## Conclusion

        Campus safety requires a comprehensive approach that addresses the unique challenges of college life while building practical skills and supportive communities. By understanding these challenges, utilizing available resources, and maintaining personal safety standards, students can navigate college successfully while minimizing risks.

        Remember that safety is not about limiting your college experience—it's about making informed decisions that allow you to fully enjoy this important time in your life. The skills you develop now will serve you well beyond graduation, forming the foundation for a lifetime of confident, safe living.

        Most importantly, safety is a community responsibility. By looking out for each other, speaking up about concerns, and supporting those who need help, we can create campus environments where everyone can thrive academically, socially, and personally.
      `,
      author: "Amanda Chen",
      date: "2024-01-05",
      readTime: "18 min read",
      category: "Campus Safety",
      tags: ["Campus", "College", "Students", "Dorm Safety"],
      image: "/api/placeholder/800/400",
      likes: 203,
      comments: 37,
      featured: false
    },
    {
      id: 5,
      title: "Digital Privacy and Online Safety: Protecting Yourself in the Digital Age",
      excerpt: "A comprehensive guide to maintaining privacy and safety online, covering everything from social media security to protecting against cyber stalking and digital harassment.",
      content: `
        In our hyperconnected world, digital privacy and online safety have become as important as physical safety. Understanding how to protect yourself online is crucial for maintaining both your digital and physical security, as the two are increasingly intertwined.

        ## Understanding Digital Footprints

        ### What is a Digital Footprint?
        Your digital footprint consists of all the data traces you leave online:

        #### Active Digital Footprint
        Information you intentionally share:
        - Social media posts and profiles
        - Photos and videos uploaded
        - Comments and reviews
        - Online purchases and transactions

        #### Passive Digital Footprint
        Information collected without your active participation:
        - Website tracking cookies
        - Location data from apps and devices
        - Search engine queries
        - App usage patterns and data

        ### Why Digital Privacy Matters for Physical Safety

        #### Location Tracking Risks
        - Stalkers can use location data to track movements
        - Routine patterns can be identified and exploited
        - Real-time location sharing can enable immediate threats
        - Historical location data can reveal personal information

        #### Personal Information Exploitation
        - Identity theft and financial fraud
        - Social engineering attacks
        - Manipulation through gathered personal details
        - Harassment based on personal preferences or beliefs

        ## Social Media Safety

        ### Privacy Settings Mastery

        #### Facebook Privacy Controls
        - Review and adjust audience for posts (public, friends, custom)
        - Control who can look you up using email/phone number
        - Limit past posts visibility
        - Manage tagged photos and post approval settings
        - Turn off location tracking and facial recognition

        #### Instagram Security
        - Switch to private account
        - Remove location from photos (disable geotagging)
        - Limit story sharing to close friends
        - Control who can message you
        - Review tagged photos before they appear

        #### Twitter/X Protection
        - Protect your tweets (make account private)
        - Control photo tagging permissions
        - Limit who can find you by email/phone
        - Disable location information
        - Manage data sharing with business partners

        #### LinkedIn Professional Safety
        - Control what information is public
        - Manage who can see your connections
        - Turn off activity broadcasts
        - Limit profile visibility to logged-in members
        - Control messaging permissions

        ### Content Sharing Best Practices

        #### Photo and Video Safety
        - Remove metadata/EXIF data before sharing
        - Avoid posting in real-time from locations
        - Be cautious about backgrounds revealing personal information
        - Consider who might see photos years later
        - Avoid sharing photos of children publicly

        #### Personal Information Guidelines
        - Don't share full birth dates, addresses, or phone numbers
        - Avoid posting about travel plans or current location
        - Be cautious about sharing workplace information
        - Think twice before posting about routines or schedules
        - Limit sharing of financial or legal information

        ## Password Security and Account Protection

        ### Strong Password Creation

        #### Password Best Practices
        - Use unique passwords for every account
        - Minimum 12 characters with mix of character types
        - Avoid personal information (names, dates, etc.)
        - Use passphrases for easier memorization
        - Update passwords regularly for sensitive accounts

        #### Password Manager Benefits
        - Generate strong, unique passwords automatically
        - Secure encrypted storage of all passwords
        - Easy access across multiple devices
        - Alert you to compromised or weak passwords
        - Popular options: 1Password, Bitwarden, LastPass

        ### Two-Factor Authentication (2FA)

        #### Why 2FA is Essential
        - Adds extra security layer beyond passwords
        - Protects against password breaches
        - Significantly reduces account compromise risk
        - Required for many sensitive services

        #### 2FA Methods
        - Authenticator apps (Google Authenticator, Authy)
        - SMS codes (less secure but better than nothing)
        - Hardware security keys (most secure option)
        - Biometric authentication where available

        ## Online Harassment and Cyberstalking

        ### Recognizing Digital Harassment

        #### Common Forms
        - Persistent unwanted contact via messages or emails
        - Sharing intimate images without consent
        - Creating fake profiles to harass or impersonate
        - Doxxing (sharing personal information publicly)
        - Coordinated harassment campaigns

        #### Warning Signs of Escalation
        - Threats of physical violence
        - References to your physical location
        - Attempts to contact friends, family, or employers
        - Creating multiple accounts to circumvent blocks
        - Monitoring and commenting on all your online activity

        ### Response Strategies

        #### Immediate Actions
        - Document everything (screenshots, URLs, timestamps)
        - Block the harasser on all platforms
        - Report to platform administrators
        - Don't engage or respond to harassment
        - Inform trusted friends and family

        #### Platform-Specific Reporting
        - Facebook: Report harassment through their reporting system
        - Instagram: Report accounts and individual posts/messages
        - Twitter: Report for targeted harassment or abuse
        - TikTok: Report accounts and content for harassment
        - LinkedIn: Report inappropriate messages or profiles

        #### Legal Options
        - File police reports for credible threats
        - Obtain restraining orders when applicable
        - Consult with attorneys specializing in cyber law
        - Report to FBI's Internet Crime Complaint Center (IC3)
        - Document everything for potential legal proceedings

        ## Device Security

        ### Smartphone Protection

        #### Essential Security Settings
        - Use strong passcodes or biometric locks
        - Enable automatic locking after short periods
        - Turn off lock screen notifications for sensitive apps
        - Disable Siri/voice assistant access from lock screen
        - Use encrypted messaging apps for sensitive conversations

        #### App Permissions Management
        - Review and limit location access for apps
        - Control camera and microphone permissions
        - Limit contact and photo access
        - Disable background app refresh for unnecessary apps
        - Regularly audit installed apps and remove unused ones

        ### Computer Security

        #### Operating System Protection
        - Keep operating system and software updated
        - Use reputable antivirus software
        - Enable firewall protection
        - Use encrypted hard drives when possible
        - Regular backups of important data

        #### Browser Security
        - Use privacy-focused browsers (Firefox, Brave)
        - Install ad blockers and privacy extensions
        - Clear cookies and browsing data regularly
        - Avoid saving passwords in browsers
        - Use private/incognito mode for sensitive browsing

        ## Email and Communication Security

        ### Email Safety

        #### Secure Email Practices
        - Use encrypted email services (ProtonMail, Tutanota)
        - Enable 2FA on email accounts
        - Be cautious about email forwards and auto-responses
        - Don't click links or download attachments from unknown senders
        - Use separate email addresses for different purposes

        #### Phishing Protection
        - Verify sender identity through separate communication channels
        - Look for spelling and grammar errors in emails
        - Check URLs carefully before clicking
        - Don't provide personal information via email
        - Report phishing attempts to your email provider

        ### Messaging App Security

        #### Encrypted Messaging
        - Use end-to-end encrypted apps (Signal, WhatsApp)
        - Verify contacts' identities for sensitive conversations
        - Enable disappearing messages for sensitive topics
        - Be cautious about group chats and who's included
        - Regularly update messaging apps for security patches

        ## Public Wi-Fi and Network Security

        ### Public Wi-Fi Risks

        #### Common Threats
        - Man-in-the-middle attacks
        - Fake hotspots designed to steal data
        - Unencrypted data transmission
        - Malware distribution through compromised networks
        - Session hijacking and account takeover

        ### Protection Strategies

        #### VPN Usage
        - Use reputable VPN services for public Wi-Fi
        - Encrypt all internet traffic
        - Hide your real IP address and location
        - Access geo-restricted content safely
        - Choose VPNs with no-logging policies

        #### Safe Public Wi-Fi Practices
        - Avoid accessing sensitive accounts on public networks
        - Use your phone's hotspot instead when possible
        - Verify network names with establishment staff
        - Turn off automatic Wi-Fi connection
        - Use HTTPS websites whenever possible

        ## Financial Privacy and Security

        ### Online Banking Safety

        #### Secure Banking Practices
        - Only access accounts from trusted devices and networks
        - Log out completely after each session
        - Monitor accounts regularly for unauthorized activity
        - Set up account alerts for transactions
        - Use bank-provided mobile apps rather than web browsers

        #### Credit Monitoring
        - Check credit reports regularly from all three bureaus
        - Set up fraud alerts on credit accounts
        - Consider credit freezes for maximum protection
        - Monitor for new accounts opened in your name
        - Report suspicious activity immediately

        ### Digital Payment Security

        #### Safe Online Shopping
        - Use credit cards rather than debit cards online
        - Shop only on secure websites (HTTPS)
        - Avoid saving payment information on websites
        - Use payment services like PayPal for additional protection
        - Check bank statements regularly for unauthorized charges

        ## Dating and Relationship Safety Online

        ### Dating App Security

        #### Profile Safety
        - Don't include identifying information in profiles
        - Use recent but not overly revealing photos
        - Avoid photos that show workplace or home location
        - Don't link to other social media accounts
        - Create a separate email for dating apps

        #### Meeting Safety
        - Meet in public places for first several dates
        - Don't share home or work addresses early
        - Let friends know when and where you're meeting
        - Provide your own transportation
        - Trust instincts about concerning behavior

        ### Red Flags in Online Dating

        #### Warning Signs
        - Pushing for personal information too quickly
        - Asking for money or financial assistance
        - Refusing to video chat or meet in person
        - Stories that don't add up or change over time
        - Pressuring for intimate photos or information

        ## Protecting Children and Teens

        ### Age-Appropriate Digital Safety

        #### Elementary Age (6-11)
        - Supervised internet use only
        - Child-safe search engines and browsers
        - Limited time online with educational focus
        - No personal information sharing ever
        - Report anything uncomfortable to adults

        #### Middle School (12-14)
        - Introduction to social media with heavy supervision
        - Education about digital footprints
        - Discussion of cyberbullying and how to respond
        - Limited friend/follower lists with parent approval
        - Regular device checks and conversation

        #### High School (15-18)
        - Increased independence with ongoing education
        - Discussion of college and career implications
        - Dating safety and consent education
        - Financial privacy and identity protection
        - Preparation for independent digital life

        ## Professional Digital Safety

        ### Workplace Privacy

        #### Professional Online Presence
        - Separate personal and professional social media
        - Google yourself regularly to see what employers might find
        - Maintain professional image across all platforms
        - Be cautious about political or controversial posts
        - Consider impact on current and future career opportunities

        #### Work Device Security
        - Understand company policies on personal use
        - Don't mix personal and work accounts on devices
        - Be cautious about what you access on work networks
        - Report security incidents to IT immediately
        - Follow company guidelines for remote work security

        ## Recovery and Response Plans

        ### Incident Response

        #### If Your Account is Compromised
        - Change passwords immediately
        - Enable 2FA if not already active
        - Review recent account activity
        - Notify contacts about potential spam from your account
        - Report to the platform and relevant authorities

        #### If You're Being Harassed
        - Document everything thoroughly
        - Report to platforms and law enforcement
        - Inform trusted friends and family
        - Consider temporary social media breaks
        - Seek professional support if needed

        ### Digital Detox and Mental Health

        #### Managing Digital Overwhelm
        - Set boundaries around device and social media use
        - Practice regular digital detoxes
        - Focus on real-world relationships and activities
        - Seek professional help for technology addiction
        - Remember that online life doesn't define your worth

        ## Conclusion

        Digital privacy and online safety require ongoing attention and education in our rapidly evolving technological landscape. By implementing these strategies and staying informed about new threats and protections, you can significantly reduce your risk while still enjoying the benefits of our connected world.

        Remember that perfect security doesn't exist, but good security practices can protect you from the vast majority of threats. Start with the basics—strong passwords, privacy settings, and cautious sharing—then build additional protections based on your specific needs and risk factors.

        Most importantly, trust your instincts online just as you would in person. If something feels wrong or too good to be true, it probably is. By combining technological tools with human wisdom and intuition, you can navigate the digital world safely while maintaining your privacy and security.

        The goal isn't to avoid technology or live in fear, but to use it wisely and safely. With proper knowledge and precautions, you can harness the power of digital tools to enhance your life while protecting your safety and privacy.
      `,
      author: "Alex Kim",
      date: "2024-01-03",
      readTime: "20 min read",
      category: "Digital Safety",
      tags: ["Privacy", "Online Safety", "Cybersecurity", "Digital Wellness"],
      image: "/api/placeholder/800/400",
      likes: 178,
      comments: 41,
      featured: false
    }
  ]

  const categories = ['all', 'Technology', 'Self-Defense', 'Psychology', 'Campus Safety', 'Digital Safety']

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Safety <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Expert knowledge, practical tips, and empowering stories to help you stay safe and confident in every aspect of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-500 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="card overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gradient-to-r from-accent-500 to-secondary-500"></div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="bg-accent-100 text-accent-700 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-dark-500 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <button
                        onClick={() => setShowFullPost(showFullPost === post.id ? null : post.id)}
                        className="flex items-center space-x-2 text-accent-500 hover:text-accent-600 font-medium"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-500 mb-8">
            All Articles ({filteredPosts.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-r from-accent-500 to-secondary-500"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="bg-accent-100 text-accent-700 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-500 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="flex items-center space-x-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowFullPost(showFullPost === post.id ? null : post.id)}
                      className="flex items-center space-x-2 text-accent-500 hover:text-accent-600 font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Full Post Modal */}
      {showFullPost && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-screen overflow-y-auto">
            {(() => {
              const post = blogPosts.find(p => p.id === showFullPost)
              if (!post) return null

              return (
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                    <button
                      onClick={() => setShowFullPost(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>

                  <h1 className="text-3xl font-bold text-dark-500 mb-4">
                    {post.title}
                  </h1>

                  <div className="flex items-center space-x-6 text-gray-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    {post.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('## ')) {
                        return <h2 key={index} className="text-2xl font-bold text-dark-500 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>
                      } else if (paragraph.startsWith('### ')) {
                        return <h3 key={index} className="text-xl font-semibold text-dark-500 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>
                      } else if (paragraph.startsWith('#### ')) {
                        return <h4 key={index} className="text-lg font-semibold text-dark-500 mt-4 mb-2">{paragraph.replace('#### ', '')}</h4>
                      } else if (paragraph.trim()) {
                        return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
                      }
                      return null
                    })}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Heart className="w-5 h-5" />
                          <span>{post.likes} likes</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MessageCircle className="w-5 h-5" />
                          <span>{post.comments} comments</span>
                        </div>
                      </div>
                      <button className="flex items-center space-x-2 text-accent-500 hover:text-accent-600">
                        <Share2 className="w-5 h-5" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}
    </div>
  )
}
