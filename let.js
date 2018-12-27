function foo(bar) {
  if (bar) {
    let baz = bar;
    if (baz) {
      let bam = baz;
    }
    console.log(bam); // ReferenceError: bam is not defined (because bam scope is only within the block of if statement)
  }
  console.log(baz); // ReferenceError: baz is not defined (because baz scope is only within the block of if statement)
}

foo('bar');
