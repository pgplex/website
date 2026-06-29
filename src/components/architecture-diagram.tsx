const DIAGRAM = `        +---------------------------------------+
        |               <span class="text-ink">Developer</span>               |
        +-------------------+-------------------+
                            |
        +-------------------+-------------------+
        |                   |                   |
+-------+-------+   +-------+-------+   +-------+-------+
|  <span class="text-accent">pgconsole</span>    |   |     <span class="text-accent">pgtui</span>     |   |   <span class="text-accent">pgschema</span>    |
| Web Console   |   |  Terminal UI  |   |   Migration   |
+-------+-------+   +-------+-------+   +-------+-------+
        |                   |                   |
        +-------------------+-------------------+
                            |
                   +--------+--------+
                   |    <span class="text-accent">pgparser</span>     |
                   |   SQL Parser    |
                   +--------+--------+
                            |
                   +--------+--------+
                   |   <span class="text-ink">PostgreSQL</span>    |
                   +-----------------+`

export function ArchitectureDiagram() {
  return (
    <div className="mx-auto mb-16 max-w-[680px]">
      <pre
        className="mx-auto w-fit overflow-x-auto border border-border bg-card p-8 text-left font-mono text-[clamp(10px,1.3vw,14px)] leading-[1.45] text-ink-dim max-md:p-[20px_16px] max-md:text-[9px] max-[480px]:p-[16px_12px] max-[480px]:text-[7.5px]"
        dangerouslySetInnerHTML={{ __html: DIAGRAM }}
      />
    </div>
  )
}
