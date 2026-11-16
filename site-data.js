const SITE_DATA = {
  person: {
    name: "Khyati Patel",
    role: "Data & Applied Scientist at Microsoft",
    location: "India",
    email: "khyatipatel724@gmail.com",
    photo: "assets/photo.jpeg",
    photoAlt: "Portrait of Khyati Patel",
    headline: "Building grounded, reliable AI systems through retrieval, structured knowledge, and agentic workflows.",
    intro:
      "I build knowledge- and agent-based AI systems for enterprise workflows. My interests span information retrieval, knowledge representation, NLP, and reliable LLM systems.",
    shortBio:
      "I graduated with a B.Tech in Computer Science and Engineering from IIT Bombay, where I worked on visual question answering and knowledge-graph-related research. I now focus on knowledge graphs, retrieval, and agents at Microsoft.",
    availability: "Building grounded, reliable AI",
  },
  socialLinks: [
    { label: "GitHub", url: "https://github.com/khy724" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/khyati-patel-0bb214222" },
    { label: "Email", url: "mailto:khyatipatel724@gmail.com" },
  ],
  resume: {
    label: "Resume",
    url: "https://docs.google.com/document/d/1mmK2zbnLlCFXpFgWPD7ORSC6HDejtQzCzG8UPpVO4Tc/edit?usp=sharing"
  },
  researchInterests: [
  {
    title: "Knowledge Graphs & Representation Learning",
    description:
      "Learning relational representations for incomplete knowledge graphs, understanding their expressiveness, and studying how structural patterns support reasoning."
  },
  {
    title: "Information Retrieval & Evidence Grounding",
    description:
      "Exploring hybrid retrieval, graph-based evidence indexing, and provenance-aware multi-hop retrieval for questions requiring evidence across documents."
  },
  {
    title: "LLM Reasoning & Agentic Systems",
    description:
      "Investigating how explicit reasoning, state reconciliation, and reflection at decision boundaries improve the reliability of tool-using agents."
  },
  {
    title: "Knowledge-Intensive NLP",
    description:
      "Combining language models with structured knowledge and external evidence to support grounded reasoning, knowledge completion, and question answering."
  },
  {
    title: "Evaluation & System Reliability",
    description:
      "Developing evaluation approaches that diagnose failures across reasoning, retrieval, graph construction, evidence composition, and end-to-end execution."
  }
],
  hobbies: [
    {
      icon: "palette",
      title: "Art",
      description: "Creating and looking at art that slows me down and makes me more observant.",
      caption: "I enjoy drawing, sketching, and noticing how color, texture, and composition change the way I see everyday things. It helps me bring a creative outlook to my work and life.",
      detail: "Current mood: experimenting with form, texture, and simple expressive marks.",
      images: [
        "assets/art/art_1.jpeg",
        "assets/art/art_3.jpeg",
        "assets/art/art_4.jpeg",
        "assets/art/art_5.jpeg",
        "assets/art/art_6.png",
        "assets/art/art_7.png",
        "assets/art/art_8.png"
      ],
    },
    {
      icon: "leaf",
      title: "Gardening",
      description: "Finding calm in plants, seasons, and the patience of growing things.",
      caption: "Gardening is a reminder that progress is gradual, and that care matters more than speed.",
      detail: "Favorite focus: small spaces, herbs, and flowers that attract life.",
      images: [
        "assets/gardening/gardening_1.jpeg",
        "assets/gardening/gardening_2.jpeg",
        "assets/gardening/gardening_3.jpeg",
        "assets/gardening/gardening_4.jpeg",
        "assets/gardening/gardening_5.jpeg",
        "assets/gardening/gardening_6.jpeg"
      ],
    },
    {
      icon: "music",
      title: "Music",
      description: "Listening to and living with music as a way to reset and recharge.",
      caption: "Music helps me find rhythm, energy, and a different kind of clarity after long stretches of thinking. I am especially drawn to Hindustani classical music, which has a soothing and calm effect making me more observant and patient.",
      detail: "Always returning to melodies that feel both grounding and expansive.",
    },
    {
      icon: "fitness",
      title: "Fitness",
      description: "Keeping a routine that supports my energy, focus, and overall wellbeing.",
      caption: "Fitness is less about perfection and more about consistency, discipline, and feeling strong in my body. I especially enjoy strength training, yoga and trying out new healthy recipes that support my energy and focus.",
      detail: "A steady routine keeps both the workday and the rest of life more sustainable.",
    },
  ],
  interests: {
  center: "Grounded & Reliable AI",
  branches: [
    {
      title: "Knowledge Graphs",
      color: "coral",
      items: [
        "Relational representations",
        "Knowledge graph completion",
        "Entity alignment",
        "Structural reasoning"
      ]
    },
    {
      title: "Retrieval & Evidence",
      color: "gold",
      items: [
        "Hybrid retrieval",
        "Evidence graphs",
        "Multi-hop retrieval",
        "Provenance tracking"
      ]
    },
    {
      title: "LLM Reasoning",
      color: "teal",
      items: [
        "Advanced reasoning",
        "State reconciliation",
        "Reflection mechanisms",
        "Grounded generation"
      ]
    },
    {
      title: "Agents & Evaluation",
      color: "blue",
      items: [
        "Tool-use reliability",
        "Deterministic orchestration",
        "Workflow correctness",
        "Layered evaluation"
      ]
    }
  ]
},
  articles: [
  {
    title: "Meeting Knowledge Graphs for Evolving Decisions",
    subtitle:
      "From meeting summaries to a provenance-aware model of how decisions evolve.",
    summary:
      "Exploring temporally aware knowledge graphs that preserve decisions, revisions, disagreements, commitments, and the evidence behind organizational changes.",
    problem:
      "Meeting assistants typically summarize isolated conversations, while organizational knowledge evolves across multiple discussions. Static summaries fail to capture how decisions change, why they changed, and which commitments remain unresolved.",
    direction:
      "Model decisions, action items, ownership, dependencies, disagreements, and status transitions in an evolving knowledge graph. Preserve source provenance and distinguish explicit decisions from tentative suggestions or inferred commitments.",
    evaluation:
      "Evaluate extraction quality, temporal consistency, provenance coverage, update correctness, and cross-meeting question answering.",
    type: "Exploratory research",
    date: "Proposed",
    url: "#"
  },

  {
    title: "Beyond Chain-of-Thought: Reflection at Decision Boundaries",
    subtitle:
      "Investigating when explicit reasoning improves the reliability of tool-using agents.",
    summary:
      "Exploring explicit mid-execution reflection as a mechanism for reconciling observations, policies, missing information, and planned actions in agentic workflows.",
    problem:
      "Reasoning performed before execution can become stale as tools change the environment. Agents may receive unexpected observations, encounter new constraints, or proceed with consequential actions despite unresolved uncertainty.",
    direction:
      "Introduce structured reflection between tool observations and subsequent actions. Rather than reasoning at every step, trigger reflection at decision boundaries such as unexpected tool outputs, policy interactions, opportunities for backtracking, and consequential actions.",
    evaluation:
      "Compare agents with and without explicit reflection across reasoning-intensive and tool-use tasks. Measure task success, Pass@1, Pass@k, latency, token consumption, tool calls, and premature or inconsistent actions. Investigate whether structured reflection outperforms free-form reasoning and whether its benefits vary across models.",
    type: "Technical exploration",
    date: "Presentation & experimental exploration",
    url: "#"
  },

  {
    title: "Learning Relational Representations for Knowledge Graph Completion",
    subtitle:
      "Understanding how embedding geometries encode relational patterns and their limitations.",
    summary:
      "An exploration of knowledge graph completion through different representation-learning approaches, examining how geometric and algebraic assumptions influence the ability to model missing relationships.",
    problem:
      "Knowledge graphs are inherently incomplete, and predicting missing relations requires representations that capture different relational properties. No single embedding geometry is equally suitable for symmetry, antisymmetry, inversion, composition, and hierarchical relationships.",
    direction:
      "Study translation-based, rotational, multiplicative, complex-valued, and geometric representation families, including TransE, TransH, RotatE, DistMult, SimplE, ComplEx, and hyperbolic or box-based approaches. Investigate entity alignment, negative sampling, and the distinction between unknown and false triples.",
    evaluation:
      "Compare representation families across relation patterns, cardinalities, and structural properties using filtered ranking metrics. Examine the effects of false negatives, incomplete labels, and relation-specific expressiveness.",
    type: "Technical exploration",
    date: "Literature & presentation exploration",
    url: "#"
  },

  {
    title: "Where Does Structural Reasoning Break Down?",
    subtitle:
      "Understanding when knowledge graph topology is insufficient for predicting missing facts.",
    summary:
      "Investigating the information boundaries of knowledge graph completion and the transition from structural inference to retrieval-based reasoning.",
    problem:
      "Embedding-based knowledge graph completion relies on patterns in observed graph topology. However, certain facts, particularly contextual or specific event-related relations, may not be inferable from structural patterns alone.",
    direction:
      "Study how knowledge graph completion approaches evolve from structural embeddings to textual descriptions, sequence generation, and retrieval-augmented methods. Explore approaches such as KG-BERT, KGT5, IR4KGC, ReSKGC, FiD, and KG-FiD.",
    evaluation:
      "Investigate performance across structurally inferable and text-dependent relations. Examine candidate recall, evidence availability, retrieval quality, and the trade-offs between parametric knowledge and external evidence.",
    type: "Research exploration",
    date: "Literature & presentation exploration",
    url: "#"
  },

  {
    title: "From Graph Retrieval to Evidence Composition",
    subtitle:
      "Using knowledge graphs as evidence indexes for multi-hop question answering.",
    summary:
      "Exploring how knowledge graphs can move beyond representing facts to indexing provenance-linked relationships that connect supporting evidence across multiple documents.",
    problem:
      "Semantic retrieval can identify passages relevant to a question without retrieving the complete evidence needed to establish an answer. Some questions require composing relationships distributed across multiple documents rather than retrieving one semantically similar passage.",
    direction:
      "Represent extracted entity relationships as provenance-linked graph edges. Build a retrieval pipeline involving entity resolution, relation extraction, constrained graph traversal, evidence-path ranking, and source verification. Treat the graph as a navigational index over source documents rather than a replacement for the original evidence.",
    evaluation:
      "Evaluate graph construction quality, entity resolution, evidence-path recall, provenance coverage, answer groundedness, citation entailment, and contradiction rates. Analyze how traversal depth, edge confidence, and path length affect retrieval quality.",
    type: "Research exploration",
    date: "Presentation & design exploration",
    url: "#"
  },

  {
    title: "Reliable Enterprise Agents",
    subtitle:
      "Separating flexible language understanding from controlled workflow execution.",
    summary:
      "Investigating agent architectures that combine model-driven interpretation and planning with explicit workflow state, deterministic orchestration, and validated execution.",
    problem:
      "Stateful enterprise workflows involve dependent actions, policies, incomplete information, and consequential tool calls. Agents can repeatedly interrupt users for clarification or confirmation, or execute actions without adequately reconciling the latest state and constraints.",
    direction:
      "Separate flexible reasoning from execution control. Represent workflow state explicitly, reconcile observations after tool calls, validate required preconditions, and use deterministic orchestration for execution order where necessary. Gate consequential actions on verified information, policy compliance, and required user confirmation.",
    evaluation:
      "Compare monolithic, delegated-planning, and orchestrated multi-agent architectures. Measure task completion, unnecessary user interruptions, execution-order violations, tool errors, recovery success, latency, and consistency across repeated trials.",
    type: "Industry design exploration",
    date: "Work in progress",
    url: "#"
  },

  {
    title: "Structured Memory for Long-Horizon LLM Agents",
    subtitle:
      "Moving beyond transcript recall toward explicit, updateable memory.",
    summary:
      "Exploring structured memory representations that combine entities, relations, events, timestamps, provenance, and confidence to support reasoning across long-running interactions.",
    problem:
      "Similarity-based retrieval over growing conversation histories can miss dependencies, contradictions, and changes in previously established information.",
    direction:
      "Maintain a compact, evolving representation that distinguishes persistent knowledge from episodic context while preserving source evidence, temporal validity, and superseded information.",
    evaluation:
      "Test multi-session tasks involving factual recall, contradiction resolution, knowledge updates, evidence traceability, and end-to-end task success.",
    type: "Exploratory research",
    date: "Proposed",
    url: "#"
  }
],
  projects: [
    {
      title: "Probing language models for Knowledge Graph Completion",
      description: "A graph-aware language-model approach to knowledge graph completion that blends retrieval, structure, and sequence modeling.",
      bullets: [
        "Adapted the Unlimiformer architecture to incorporate graph context via kNN retrieval in cross-attention.",
        "Built a graph-to-sequence framework using ComplEx-initialized embeddings and shortest-path triple extraction.",
        "Studied positional encodings, model depth, and retrieval-based training strategies for link prediction performance and efficiency."
      ],
      advisor: "Prof. Soumen Chakrabarti",
      status: "Research Project",
      tags: [
        "Representation Learning",
        "Knowledge Graph Completion",
        "Language Models",
        "Model Finetuning",
        "Candidate Retrieval"
      ],
      url: "https://drive.google.com/drive/folders/1jbTXJc37Ei8r4XDsuKPObDdBaC429Zl0?usp=drive_link",
  repository: "#"
    },
    {
      title: "Advanced VQA for Remote Sensing",
      status: "Research Project",
      advisor: "Prof. Biplab Banerjee",
      tags: [
        "Visual Question Answering",
        "Multi-Modal Reasoning",
        "Spatial Understanding",
        "Remote Sensing Imagery"
      ],
      description: "Explored advanced visual question answering techniques for remote sensing imagery, focusing on multi-modal reasoning and spatial understanding.",
      bullets: [
        "Investigated visual question answering for remote-sensing imagery, exploring how explicit question–image interactions and spatial relationships between image regions can improve multimodal reasoning.",
        "Developed a question-conditioned cross-attention framework to align textual and visual features, and incorporated GCN over Region Adjacency Graphs generated to capture spatial relationships among image regions.",
        "Improved overall accuracy on the low-resolution dataset from 0.83 to 0.86 over the baseline through enhanced multimodal feature interaction and spatial reasoning."
      ],
      url: "https://drive.google.com/drive/folders/1cgPEOog5iZkq7dwccyV-a7ygKLa2spEw?usp=drive_link",
      repository: "#"
    },
    {
      title: "Designing decision-heavy enterprise AI systems without losing control",
      bullets: [
        "Investigated reliability and interaction challenges in LLM-driven, stateful enterprise workflows, comparing monolithic agents, advanced reasoning models, and delegated-planning architectures to identify failure modes including redundant user clarification loops and violations of task dependencies.",
        "Derived five architectural design principles and designed a tri-agent architecture (Planner–Orchestrator–Executor) that separates reasoning, workflow control, and execution, using explicit state management and a persistent task queue to enforce deterministic execution, handle missing information, and support fault recovery.",
        "Explored implementation trade-offs in tool allocation, context management, and controlled parallelism."
      ],
      status: "DS+AI@Microsoft Publication",
      tags: [
        "Agentic AI",
        "Decision-heavy Enterprise Workflows",
        "Reliability",
        "Orchestration",
        "State Management",
        "Deterministic Execution",
      ],
      url: "https://medium.com/data-science-at-microsoft/designing-decision-heavy-enterprise-ai-systems-without-losing-control-60ac5d25e1e3?sharedUserId=khyatipatel724",
      repository: "#"
    },
    {
  title: "Advanced Reasoning in Tool-Using Agents",
  description:
    "Explored explicit mid-execution reasoning mechanisms for improving agent reliability. Investigated Chain-of-Thought, Tree-of-Thought, and Graph-of-Thought approaches alongside reasoning models and dedicated reflection tools. Conducted reasoning probes and examined agent performance in tool-use environments, including tau-bench, studying when reflection improves task execution and when its latency and token overhead may outweigh its benefits.",
  status: "Technical Exploration",
  tags: [
    "LLM Reasoning",
    "Agentic Systems",
    "Tool Use",
    "Evaluation"
  ],
  url: "https://drive.google.com/file/d/1qgz8bkbpV55zBa_xzFwPCcN8lqe5i32F/view?usp=sharing",
  repository: "#"
},
{
  title: "Knowledge Graph Completion & Representation Learning",
  description:
    "Studied knowledge graph completion through relational embedding models and their underlying geometric assumptions. Explored representation families including TransE, TransH, RotatE, DistMult, SimplE, ComplEx, and hyperbolic or box-based approaches. Investigated entity alignment, negative sampling, filtered evaluation, and the limitations of structural inference for relations requiring external textual evidence.",
  status: "Technical Exploration",
  tags: [
    "Knowledge Graphs",
    "Representation Learning",
    "Knowledge Completion",
    "NLP"
  ],
  url: "https://drive.google.com/file/d/1emLgCGKR7WjAEo9Pq9WW810qQIeHhOPF/view?usp=sharing",
  repository: "#"
},
{
  title: "Knowledge Graphs as Evidence Indexes",
  description:
    "Explored knowledge graphs as provenance-aware retrieval structures for multi-hop question answering. Developed a conceptual pipeline involving entity and relation extraction, entity resolution, provenance-linked edge construction, constrained graph traversal, evidence-path ranking, and source verification. Examined how graph structure can support evidence composition beyond conventional semantic retrieval and identified layered evaluation requirements for graph quality, retrieval quality, and answer grounding.",
  status: "Technical Exploration",
  tags: [
    "Knowledge Graphs",
    "Information Retrieval",
    "Graph RAG",
    "Evidence Grounding"
  ],
  url: "https://drive.google.com/file/d/1xyYZXBS6toQz36IBxz6EafSrMsd7GC_x/view?usp=sharing",
  repository: "#"
}],
};
