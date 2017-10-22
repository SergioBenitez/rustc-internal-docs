initSidebarItems({"enum":[["Delimiter","Describes how a sequence of token trees is delimited."],["Level","An enum representing a diagnostic level."],["Spacing","Whether an `Op` is either followed immediately by another `Op` or followed by whitespace."],["TokenNode","Description of a `TokenTree`"]],"fn":[["quote_span","Quote a `Span` into a `TokenStream`. This is needed to implement a custom quoter."]],"macro":[["quote","`quote!(..)` accepts arbitrary tokens and expands into a `TokenStream` describing the input. For example, `quote!(a + b)` will produce a expression, that, when evaluated, constructs the `TokenStream` `[Word(\"a\"), Op('+', Alone), Word(\"b\")]`."]],"struct":[["Diagnostic","A structure representing a diagnostic message and associated children messages."],["LexError","Error returned from `TokenStream::from_str`."],["LineColumn","A line-column pair representing the start or end of a `Span`."],["Literal","A literal character (`'a'`), string (`\"hello\"`), or number (`2.3`)."],["SourceFile","The source file of a given `Span`."],["Span","A region of source code, along with macro expansion information."],["Term","An interned string."],["TokenStream","The main type provided by this crate, representing an abstract stream of tokens."],["TokenTree","A single token or a delimited sequence of token trees (e.g. `[1, (), ..]`)."],["TokenTreeIter","An iterator over `TokenTree`s."]]});