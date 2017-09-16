initSidebarItems({"constant":[["ARGUMENT_VISIBILITY_SCOPE",""],["RETURN_POINTER",""],["START_BLOCK","where execution begins"]],"enum":[["AggregateKind",""],["AssertMessage",""],["BinOp",""],["BorrowKind",""],["CastKind",""],["Literal",""],["LocalKind","Classifies locals into categories. See `Mir::local_kind`."],["Lvalue","A path to a value; something that can be evaluated without changing or disturbing program state."],["Mutability",""],["NullOp",""],["Operand","These are values that can appear inside an rvalue (or an index lvalue). They are intentionally limited to prevent rvalues from being nested in one another."],["ProjectionElem",""],["Rvalue","Rvalues"],["StatementKind",""],["TerminatorKind",""],["UnOp",""],["ValidationOp","The `ValidationOp` describes what happens with each of the operands of a `Validate` statement."]],"mod":[["tcx","Methods for the various MIR types. These are intended for use after building is complete."],["transform","See the README for details on writing your own pass."],["traversal",""],["visit",""]],"struct":[["BasicBlock",""],["BasicBlockData",""],["Constant","Constants"],["Field",""],["GeneratorLayout","The layout of generator state"],["Local",""],["LocalDecl","A MIR local."],["Location",""],["Mir","Lowered representation of a single function."],["Projection","The `Projection` data structure defines things of the form `B.x` or `*B` or `B[index]`. Note that it is parameterized because it is shared between `Constant` and `Lvalue`. See the aliases `LvalueProjection` etc below."],["Promoted",""],["SourceInfo","Grouped information about the source code origin of a MIR entity. Intended to be inspected by diagnostics and debuginfo. Most passes can work with it as a whole, within a single function."],["Statement",""],["Static","The def-id of a static, along with its normalized type (which is stored to avoid requiring normalization when reading MIR)."],["Terminator",""],["UpvarDecl","A closure capture, with its name and mode."],["ValidationOperand",""],["VisibilityScope",""],["VisibilityScopeData",""]],"trait":[["HasLocalDecls",""]],"type":[["LvalueElem","Alias for projections as they appear in lvalues, where the base is an lvalue and the index is a local."],["LvalueProjection","Alias for projections as they appear in lvalues, where the base is an lvalue and the index is a local."]]});