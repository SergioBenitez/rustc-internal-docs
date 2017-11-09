initSidebarItems({"constant":[["False",""],["True",""]],"enum":[["ArchiveChild_opaque",""],["ArchiveIterator_opaque",""],["ArchiveKind","LLVMRustArchiveKind"],["Archive_opaque",""],["AsmDialect","LLVMRustAsmDialect"],["AtomicOrdering","LLVMAtomicOrdering"],["AtomicRmwBinOp","LLVMAtomicRmwBinOp"],["Attribute","Matches LLVMRustAttribute in rustllvm.h Semantically a subset of the C++ enum llvm::Attribute::AttrKind, though it is not ABI compatible (since it's a C++ enum)"],["AttributePlace",""],["BasicBlock_opaque",""],["Builder_opaque",""],["CallConv","LLVM CallingConv::ID. Should we wrap this?"],["CodeGenOptLevel","LLVMRustCodeGenOptLevel"],["CodeGenOptSize",""],["CodeModel","LLVMRustCodeModel"],["Context_opaque",""],["DLLStorageClass","LLVMDLLStorageClass"],["DebugLoc_opaque",""],["DiagnosticInfo_opaque",""],["DiagnosticKind","LLVMRustDiagnosticKind"],["DiagnosticSeverity","LLVMDiagnosticSeverity"],["ExecutionEngine_opaque",""],["FileType","LLVMRustFileType"],["IntPredicate","LLVMIntPredicate"],["LLVMRustResult",""],["Linkage","LLVMRustLinkage"],["MemoryBuffer_opaque",""],["MetadataType","LLVMMetadataType"],["Metadata_opaque",""],["ModuleBuffer",""],["Module_opaque",""],["ObjectFile_opaque",""],["OperandBundleDef_opaque",""],["PassKind","LLVMRustPassKind"],["PassManagerBuilder_opaque",""],["PassManager_opaque",""],["Pass_opaque",""],["RealPredicate","LLVMRealPredicate"],["RelocMode","LLVMRelocMode"],["RustArchiveMember_opaque",""],["RustString_opaque",""],["SMDiagnostic_opaque",""],["SectionIterator_opaque",""],["SynchronizationScope","LLVMRustSynchronizationScope"],["TargetData_opaque",""],["TargetMachine_opaque",""],["ThinLTOBuffer","LLVMRustThinLTOBuffer"],["ThinLTOData","LLVMRustThinLTOData"],["ThreadLocalMode","LLVMThreadLocalMode"],["Twine_opaque",""],["TypeKind","LLVMTypeKind"],["Type_opaque",""],["Use_opaque",""],["Value_opaque",""],["Visibility",""]],"fn":[["AddFunctionAttrStringValue",""],["LLVMABIAlignmentOfType","Returns the minimum alignment of a type."],["LLVMABISizeOfType","Distance between successive elements in an array of T. Includes ABI padding."],["LLVMAddCase",""],["LLVMAddClause",""],["LLVMAddFunction",""],["LLVMAddGlobal",""],["LLVMAddIncoming",""],["LLVMAddNamedMetadataOperand",""],["LLVMAppendBasicBlockInContext",""],["LLVMBasicBlockAsValue",""],["LLVMBuildAShr",""],["LLVMBuildAdd",""],["LLVMBuildAggregateRet",""],["LLVMBuildAlloca",""],["LLVMBuildAnd",""],["LLVMBuildAtomicRMW",""],["LLVMBuildBinOp",""],["LLVMBuildBitCast",""],["LLVMBuildBr",""],["LLVMBuildCast",""],["LLVMBuildCondBr",""],["LLVMBuildExactSDiv",""],["LLVMBuildExtractElement",""],["LLVMBuildExtractValue",""],["LLVMBuildFAdd",""],["LLVMBuildFCmp",""],["LLVMBuildFDiv",""],["LLVMBuildFMul",""],["LLVMBuildFNeg",""],["LLVMBuildFPCast",""],["LLVMBuildFPExt",""],["LLVMBuildFPToSI",""],["LLVMBuildFPToUI",""],["LLVMBuildFPTrunc",""],["LLVMBuildFRem",""],["LLVMBuildFSub",""],["LLVMBuildFree",""],["LLVMBuildGEP",""],["LLVMBuildGlobalString",""],["LLVMBuildGlobalStringPtr",""],["LLVMBuildICmp",""],["LLVMBuildInBoundsGEP",""],["LLVMBuildIndirectBr",""],["LLVMBuildInsertElement",""],["LLVMBuildInsertValue",""],["LLVMBuildIntToPtr",""],["LLVMBuildIsNotNull",""],["LLVMBuildIsNull",""],["LLVMBuildLShr",""],["LLVMBuildLoad",""],["LLVMBuildMul",""],["LLVMBuildNSWAdd",""],["LLVMBuildNSWMul",""],["LLVMBuildNSWNeg",""],["LLVMBuildNSWSub",""],["LLVMBuildNUWAdd",""],["LLVMBuildNUWMul",""],["LLVMBuildNUWNeg",""],["LLVMBuildNUWSub",""],["LLVMBuildNeg",""],["LLVMBuildNot",""],["LLVMBuildOr",""],["LLVMBuildPhi",""],["LLVMBuildPointerCast",""],["LLVMBuildPtrDiff",""],["LLVMBuildPtrToInt",""],["LLVMBuildResume",""],["LLVMBuildRet",""],["LLVMBuildRetVoid",""],["LLVMBuildSDiv",""],["LLVMBuildSExt",""],["LLVMBuildSExtOrBitCast",""],["LLVMBuildSIToFP",""],["LLVMBuildSRem",""],["LLVMBuildSelect",""],["LLVMBuildShl",""],["LLVMBuildShuffleVector",""],["LLVMBuildStore",""],["LLVMBuildStructGEP",""],["LLVMBuildSub",""],["LLVMBuildSwitch",""],["LLVMBuildTrunc",""],["LLVMBuildTruncOrBitCast",""],["LLVMBuildUDiv",""],["LLVMBuildUIToFP",""],["LLVMBuildURem",""],["LLVMBuildUnreachable",""],["LLVMBuildVAArg",""],["LLVMBuildXor",""],["LLVMBuildZExt",""],["LLVMBuildZExtOrBitCast",""],["LLVMCloneModule",""],["LLVMConstAShr",""],["LLVMConstAdd",""],["LLVMConstAnd",""],["LLVMConstArray",""],["LLVMConstBitCast",""],["LLVMConstExtractValue",""],["LLVMConstFAdd",""],["LLVMConstFCmp",""],["LLVMConstFDiv",""],["LLVMConstFMul",""],["LLVMConstFNeg",""],["LLVMConstFPCast",""],["LLVMConstFPToSI",""],["LLVMConstFPToUI",""],["LLVMConstFRem",""],["LLVMConstFSub",""],["LLVMConstICmp",""],["LLVMConstInlineAsm",""],["LLVMConstInt",""],["LLVMConstIntCast",""],["LLVMConstIntGetSExtValue",""],["LLVMConstIntGetZExtValue",""],["LLVMConstIntOfArbitraryPrecision",""],["LLVMConstIntToPtr",""],["LLVMConstLShr",""],["LLVMConstMul",""],["LLVMConstNamedStruct",""],["LLVMConstNeg",""],["LLVMConstNot",""],["LLVMConstNull",""],["LLVMConstOr",""],["LLVMConstPointerCast",""],["LLVMConstPtrToInt",""],["LLVMConstSDiv",""],["LLVMConstSIToFP",""],["LLVMConstSRem",""],["LLVMConstShl",""],["LLVMConstStringInContext",""],["LLVMConstStructInContext",""],["LLVMConstSub",""],["LLVMConstTrunc",""],["LLVMConstUDiv",""],["LLVMConstUIToFP",""],["LLVMConstURem",""],["LLVMConstVector",""],["LLVMConstXor",""],["LLVMConstZExt",""],["LLVMContextCreate",""],["LLVMContextDispose",""],["LLVMContextSetDiagnosticHandler",""],["LLVMCountParamTypes",""],["LLVMCountParams",""],["LLVMCountStructElementTypes",""],["LLVMCreateBuilderInContext",""],["LLVMCreateFunctionPassManagerForModule","Creates a function-by-function pass manager"],["LLVMCreateObjectFile","Opens an object file."],["LLVMCreatePassManager","Creates a pass manager."],["LLVMCreateTargetData","Creates target data from a target layout string."],["LLVMDeleteBasicBlock",""],["LLVMDeleteGlobal",""],["LLVMDisposeBuilder",""],["LLVMDisposeModule",""],["LLVMDisposeObjectFile","Closes an object file."],["LLVMDisposePassManager","Disposes a pass manager."],["LLVMDisposeSectionIterator","Destroys a section iterator."],["LLVMDisposeTargetData","Disposes target data."],["LLVMDoubleTypeInContext",""],["LLVMDumpModule","See Module::dump."],["LLVMFloatTypeInContext",""],["LLVMFunctionType",""],["LLVMGetAlignment",""],["LLVMGetArrayLength",""],["LLVMGetBasicBlockParent",""],["LLVMGetCurrentDebugLocation",""],["LLVMGetDataLayout","Data layout. See Module::getDataLayout."],["LLVMGetElementType",""],["LLVMGetFirstBasicBlock",""],["LLVMGetFirstFunction",""],["LLVMGetFirstGlobal",""],["LLVMGetFirstInstruction",""],["LLVMGetFirstUse",""],["LLVMGetGlobalParent",""],["LLVMGetInitializer",""],["LLVMGetInsertBlock",""],["LLVMGetInstructionParent",""],["LLVMGetIntTypeWidth",""],["LLVMGetMDKindIDInContext",""],["LLVMGetModuleContext",""],["LLVMGetModuleIdentifier",""],["LLVMGetNamedFunction",""],["LLVMGetNamedGlobal",""],["LLVMGetNextFunction",""],["LLVMGetNextGlobal",""],["LLVMGetNextUse",""],["LLVMGetOperand",""],["LLVMGetParam",""],["LLVMGetParamTypes",""],["LLVMGetReturnType",""],["LLVMGetSection",""],["LLVMGetSectionContents","Returns the current section contents as a string buffer."],["LLVMGetSectionSize","Returns the current section size."],["LLVMGetSections","Enumerates the sections in an object file."],["LLVMGetStructElementTypes",""],["LLVMGetUndef",""],["LLVMGetUser",""],["LLVMGetValueName",""],["LLVMGetVectorSize",""],["LLVMInitializePasses",""],["LLVMInstructionEraseFromParent",""],["LLVMInt16TypeInContext",""],["LLVMInt1TypeInContext",""],["LLVMInt32TypeInContext",""],["LLVMInt64TypeInContext",""],["LLVMInt8TypeInContext",""],["LLVMIntTypeInContext",""],["LLVMIsAConstantInt",""],["LLVMIsAGlobalVariable",""],["LLVMIsAStoreInst",""],["LLVMIsATerminatorInst",""],["LLVMIsDeclaration",""],["LLVMIsGlobalConstant",""],["LLVMIsNull",""],["LLVMIsPackedStruct",""],["LLVMIsSectionIteratorAtEnd","Returns true if the section iterator is at the end of the section list:"],["LLVMIsUndef",""],["LLVMMDNodeInContext",""],["LLVMMDStringInContext",""],["LLVMModuleCreateWithNameInContext",""],["LLVMMoveToNextSection","Moves the section iterator to point to the next section."],["LLVMOffsetOfElement","Computes the byte offset of the indexed struct element for a target."],["LLVMPassManagerBuilderCreate",""],["LLVMPassManagerBuilderDispose",""],["LLVMPassManagerBuilderPopulateFunctionPassManager",""],["LLVMPassManagerBuilderPopulateLTOPassManager",""],["LLVMPassManagerBuilderPopulateModulePassManager",""],["LLVMPassManagerBuilderSetDisableUnrollLoops",""],["LLVMPassManagerBuilderSetSizeLevel",""],["LLVMPassManagerBuilderUseInlinerWithThreshold",""],["LLVMPointerType",""],["LLVMPositionBuilder",""],["LLVMPositionBuilderAtEnd",""],["LLVMPositionBuilderBefore",""],["LLVMPreferredAlignmentOfType","Returns the preferred alignment of a type."],["LLVMReplaceAllUsesWith",""],["LLVMRunPassManager","Runs a pass manager on a module."],["LLVMRustAddAlwaysInlinePass",""],["LLVMRustAddAnalysisPasses",""],["LLVMRustAddBuilderLibraryInfo",""],["LLVMRustAddCallSiteAttribute",""],["LLVMRustAddDereferenceableAttr",""],["LLVMRustAddDereferenceableCallSiteAttr",""],["LLVMRustAddFunctionAttrStringValue",""],["LLVMRustAddFunctionAttribute",""],["LLVMRustAddHandler",""],["LLVMRustAddLibraryInfo",""],["LLVMRustAddModuleFlag",""],["LLVMRustAddPass",""],["LLVMRustAppendModuleInlineAsm",""],["LLVMRustArchiveChildData",""],["LLVMRustArchiveChildFree",""],["LLVMRustArchiveChildName",""],["LLVMRustArchiveIteratorFree",""],["LLVMRustArchiveIteratorNew",""],["LLVMRustArchiveIteratorNext",""],["LLVMRustArchiveMemberFree",""],["LLVMRustArchiveMemberNew",""],["LLVMRustArrayType",""],["LLVMRustBuildAtomicCmpXchg",""],["LLVMRustBuildAtomicFence",""],["LLVMRustBuildAtomicLoad",""],["LLVMRustBuildAtomicStore",""],["LLVMRustBuildCall",""],["LLVMRustBuildCatchPad",""],["LLVMRustBuildCatchRet",""],["LLVMRustBuildCatchSwitch",""],["LLVMRustBuildCleanupPad",""],["LLVMRustBuildCleanupRet",""],["LLVMRustBuildIntCast",""],["LLVMRustBuildInvoke",""],["LLVMRustBuildLandingPad",""],["LLVMRustBuildOperandBundleDef",""],["LLVMRustConfigurePassManagerBuilder",""],["LLVMRustConstInt128Get",""],["LLVMRustCreateMemoryBufferWithContentsOfFile","Reads the given file and returns it as a memory buffer. Use LLVMDisposeMemoryBuffer() to get rid of it."],["LLVMRustCreateTargetMachine",""],["LLVMRustCreateThinLTOData",""],["LLVMRustDIBuilderCreate",""],["LLVMRustDIBuilderCreateArrayType",""],["LLVMRustDIBuilderCreateBasicType",""],["LLVMRustDIBuilderCreateCompileUnit",""],["LLVMRustDIBuilderCreateDebugLocation",""],["LLVMRustDIBuilderCreateEnumerationType",""],["LLVMRustDIBuilderCreateEnumerator",""],["LLVMRustDIBuilderCreateFile",""],["LLVMRustDIBuilderCreateFunction",""],["LLVMRustDIBuilderCreateLexicalBlock",""],["LLVMRustDIBuilderCreateLexicalBlockFile",""],["LLVMRustDIBuilderCreateMemberType",""],["LLVMRustDIBuilderCreateNameSpace",""],["LLVMRustDIBuilderCreateOpDeref",""],["LLVMRustDIBuilderCreateOpPlus",""],["LLVMRustDIBuilderCreatePointerType",""],["LLVMRustDIBuilderCreateStaticVariable",""],["LLVMRustDIBuilderCreateStructType",""],["LLVMRustDIBuilderCreateSubroutineType",""],["LLVMRustDIBuilderCreateTemplateTypeParameter",""],["LLVMRustDIBuilderCreateUnionType",""],["LLVMRustDIBuilderCreateVariable",""],["LLVMRustDIBuilderCreateVectorType",""],["LLVMRustDIBuilderDispose",""],["LLVMRustDIBuilderFinalize",""],["LLVMRustDIBuilderGetOrCreateArray",""],["LLVMRustDIBuilderGetOrCreateSubrange",""],["LLVMRustDIBuilderInsertDeclareAtEnd",""],["LLVMRustDICompositeTypeSetTypeArray",""],["LLVMRustDebugMetadataVersion",""],["LLVMRustDestroyArchive",""],["LLVMRustDisposeTargetMachine",""],["LLVMRustFindAndCreatePass",""],["LLVMRustFreeOperandBundleDef",""],["LLVMRustFreeThinLTOData",""],["LLVMRustGetDiagInfoKind",""],["LLVMRustGetLastError","Returns a string describing the last error caused by an LLVMRust* call."],["LLVMRustGetLinkage",""],["LLVMRustGetModuleDataLayout",""],["LLVMRustGetNamedValue",""],["LLVMRustGetOrInsertFunction",""],["LLVMRustGetOrInsertGlobal",""],["LLVMRustGetSectionName",""],["LLVMRustGetTypeKind","See llvm::LLVMTypeKind::getTypeID."],["LLVMRustGetValueContext","See llvm::Value::getContext"],["LLVMRustGetVisibility",""],["LLVMRustHasFeature",""],["LLVMRustInlineAsm","Prepares inline assembly."],["LLVMRustLinkInExternalBitcode",""],["LLVMRustLinkInParsedExternalBitcode",""],["LLVMRustMarkAllFunctionsNounwind",""],["LLVMRustMetadataAsValue",""],["LLVMRustMetadataTypeInContext",""],["LLVMRustModuleBufferCreate",""],["LLVMRustModuleBufferFree",""],["LLVMRustModuleBufferLen",""],["LLVMRustModuleBufferPtr",""],["LLVMRustModuleCost",""],["LLVMRustOpenArchive",""],["LLVMRustParseBitcodeForThinLTO",""],["LLVMRustPassKind",""],["LLVMRustPassManagerBuilderPopulateThinLTOPassManager",""],["LLVMRustPositionBuilderAtStart",""],["LLVMRustPrepareThinLTOImport",""],["LLVMRustPrepareThinLTOInternalize",""],["LLVMRustPrepareThinLTORename",""],["LLVMRustPrepareThinLTOResolveWeak",""],["LLVMRustPrintModule",""],["LLVMRustPrintPassTimings","Print the pass timings since static dtors aren't picking them up."],["LLVMRustPrintPasses",""],["LLVMRustPrintTargetCPUs",""],["LLVMRustPrintTargetFeatures",""],["LLVMRustRemoveFunctionAttributes",""],["LLVMRustRunFunctionPassManager",""],["LLVMRustRunRestrictionPass",""],["LLVMRustSetComdat",""],["LLVMRustSetDataLayoutFromTargetMachine",""],["LLVMRustSetDebug","Enables LLVM debug output."],["LLVMRustSetHasUnsafeAlgebra",""],["LLVMRustSetInlineAsmDiagnosticHandler",""],["LLVMRustSetLLVMOptions",""],["LLVMRustSetLinkage",""],["LLVMRustSetModulePIELevel",""],["LLVMRustSetNormalizedTarget",""],["LLVMRustSetVisibility",""],["LLVMRustStringWriteImpl","Appending to a Rust string -- used by RawRustStringOstream."],["LLVMRustThinLTOAvailable",""],["LLVMRustThinLTOBufferCreate",""],["LLVMRustThinLTOBufferFree",""],["LLVMRustThinLTOBufferLen",""],["LLVMRustThinLTOBufferPtr",""],["LLVMRustUnpackInlineAsmDiagnostic",""],["LLVMRustUnpackOptimizationDiagnostic",""],["LLVMRustUnsetComdat",""],["LLVMRustVersionMajor",""],["LLVMRustVersionMinor",""],["LLVMRustWriteArchive",""],["LLVMRustWriteDebugLocToString",""],["LLVMRustWriteDiagnosticInfoToString",""],["LLVMRustWriteOutputFile",""],["LLVMRustWriteSMDiagnosticToString",""],["LLVMRustWriteThinBitcodeToFile",""],["LLVMRustWriteTwineToString",""],["LLVMRustWriteTypeToString",""],["LLVMRustWriteValueToString",""],["LLVMSetAlignment",""],["LLVMSetCleanup",""],["LLVMSetCurrentDebugLocation",""],["LLVMSetDLLStorageClass",""],["LLVMSetDataLayout",""],["LLVMSetFunctionCallConv",""],["LLVMSetGlobalConstant",""],["LLVMSetInitializer",""],["LLVMSetInstDebugLocation",""],["LLVMSetInstructionCallConv",""],["LLVMSetMetadata",""],["LLVMSetModuleInlineAsm","See Module::setModuleInlineAsm."],["LLVMSetPersonalityFn",""],["LLVMSetSection",""],["LLVMSetTailCall",""],["LLVMSetThreadLocal",""],["LLVMSetThreadLocalMode",""],["LLVMSetUnnamedAddr",""],["LLVMSetValueName",""],["LLVMSetVolatile",""],["LLVMSizeOf",""],["LLVMSizeOfTypeInBits","Number of bytes clobbered when doing a Store to *T."],["LLVMStartMultithreaded",""],["LLVMStructCreateNamed",""],["LLVMStructSetBody",""],["LLVMStructTypeInContext",""],["LLVMTypeOf",""],["LLVMVectorType",""],["LLVMVoidTypeInContext",""],["LLVMWriteBitcodeToFile","Writes a module to the specified path. Returns 0 on success."],["SetFunctionCallConv",""],["SetInstructionCallConv",""],["SetUniqueComdat",""],["SetUnnamedAddr",""],["UnsetComdat",""],["build_string",""],["debug_loc_to_string",""],["get_param","Safe wrapper around `LLVMGetParam`, because segfaults are no fun."],["initialize_available_targets",""],["last_error",""],["mk_section_iter",""],["set_thread_local",""],["set_thread_local_mode",""],["twine_to_string",""]],"mod":[["archive_ro","A wrapper around LLVM's archive (.a) code"],["debuginfo",""],["diagnostic","LLVM diagnostic reports."]],"struct":[["ObjectFile",""],["OperandBundleDef",""],["SectionIter",""],["ThinLTOModule","LLVMRustThinLTOModule"]],"type":[["ArchiveChildRef",""],["ArchiveIteratorRef",""],["ArchiveRef",""],["BasicBlockRef",""],["Bool",""],["BuilderRef",""],["ContextRef",""],["DebugLocRef",""],["DiagnosticHandler",""],["DiagnosticInfoRef",""],["ExecutionEngineRef",""],["InlineAsmDiagHandler",""],["MemoryBufferRef",""],["MetadataRef",""],["ModuleRef",""],["ObjectFileRef",""],["Opcode",""],["OperandBundleDefRef",""],["PassManagerBuilderRef",""],["PassManagerRef",""],["PassRef",""],["RustArchiveMemberRef",""],["SMDiagnosticRef",""],["SectionIteratorRef",""],["TargetDataRef",""],["TargetMachineRef",""],["TwineRef",""],["TypeRef",""],["UseRef",""],["ValueRef",""]]});